import { NextResponse } from "next/server";
import { Resend } from "resend";
import { siteContent } from "@/lib/content";

interface ContactRequestBody {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
  privacy?: boolean;
}

const VALID_SUBJECTS: readonly string[] =
  siteContent.contatti.form.subjectOptions.map((option) => option.value);

function getSubjectLabel(value: string): string {
  const option = siteContent.contatti.form.subjectOptions.find(
    (item) => item.value === value,
  );
  return option?.label ?? value;
}

function validateBody(body: ContactRequestBody) {
  const errors: string[] = [];

  if (!body.name?.trim()) {
    errors.push(siteContent.contatti.form.validation.nameRequired);
  }

  if (!body.email?.trim()) {
    errors.push(siteContent.contatti.form.validation.emailRequired);
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(body.email.trim())) {
    errors.push(siteContent.contatti.form.validation.emailInvalid);
  }

  if (!body.subject?.trim()) {
    errors.push(siteContent.contatti.form.validation.subjectRequired);
  } else if (!VALID_SUBJECTS.includes(body.subject)) {
    errors.push(siteContent.contatti.form.validation.subjectRequired);
  }

  if (!body.message?.trim()) {
    errors.push(siteContent.contatti.form.validation.messageRequired);
  }

  if (body.privacy !== true) {
    errors.push(siteContent.contatti.form.validation.privacyRequired);
  }

  return errors;
}

export async function POST(request: Request) {
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;
    const emailTo = process.env.EMAIL_TO ?? contactEmail;

    if (!apiKey || apiKey === "re_xxxxxxxxxxxx") {
      return NextResponse.json(
        { error: siteContent.contatti.form.unavailable },
        { status: 503 },
      );
    }

    if (!emailTo) {
      return NextResponse.json(
        { error: siteContent.contatti.form.unavailable },
        { status: 503 },
      );
    }

    let body: ContactRequestBody;

    try {
      body = (await request.json()) as ContactRequestBody;
    } catch {
      return NextResponse.json(
        { error: siteContent.contatti.form.error },
        { status: 400 },
      );
    }

    const validationErrors = validateBody(body);

    if (validationErrors.length > 0) {
      return NextResponse.json(
        { error: validationErrors[0], errors: validationErrors },
        { status: 400 },
      );
    }

    const name = body.name!.trim();
    const email = body.email!.trim();
    const phone = body.phone?.trim();
    const subject = body.subject!.trim();
    const message = body.message!.trim();
    const subjectLabel = getSubjectLabel(subject);

    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: process.env.EMAIL_FROM ?? "onboarding@resend.dev",
      to: emailTo,
      replyTo: email,
      subject: `[Contatti Sito] ${subjectLabel} — ${name}`,
      html: `
        <h2>Nuovo messaggio dal sito</h2>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        ${phone ? `<p><strong>Telefono:</strong> ${phone}</p>` : ""}
        <p><strong>Oggetto:</strong> ${subjectLabel}</p>
        <p><strong>Messaggio:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    if (error) {
      console.error("[contact] Resend error:", error);
      return NextResponse.json(
        { error: siteContent.contatti.form.error },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (error) {
    console.error("[contact] Unexpected error:", error);
    return NextResponse.json(
      { error: siteContent.contatti.form.error },
      { status: 500 },
    );
  }
}
