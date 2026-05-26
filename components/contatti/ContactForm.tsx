"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { siteContent } from "@/lib/content";

type SubmitStatus = "idle" | "loading" | "success" | "error";

interface ContactFormValues {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
  privacy: boolean;
}

export default function ContactForm() {
  const { form: formContent } = siteContent.contatti;
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      privacy: false,
    },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          phone: values.phone || undefined,
          subject: values.subject,
          message: values.message,
          privacy: values.privacy,
        }),
      });

      if (!response.ok) {
        setSubmitStatus("error");
        return;
      }

      reset();
      setSubmitStatus("success");
    } catch {
      setSubmitStatus("error");
    }
  };

  const isLoading = submitStatus === "loading";
  const isDisabled = isLoading || submitStatus === "success";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="rounded-lg bg-white p-6 shadow-sm sm:p-8"
      aria-busy={isLoading}
    >
      {submitStatus === "success" && (
        <div
          role="status"
          className="mb-6 rounded-md border border-primary/30 bg-primary/5 px-4 py-3 text-sm text-text"
        >
          {formContent.success}
        </div>
      )}

      {submitStatus === "error" && (
        <div
          role="alert"
          className="mb-6 rounded-md border border-primary bg-primary/10 px-4 py-3 text-sm text-text"
        >
          {formContent.error}
        </div>
      )}

      <div className="space-y-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-text">
            {formContent.name}
          </label>
          <input
            id="name"
            type="text"
            disabled={isDisabled}
            placeholder={formContent.namePlaceholder}
            className="mt-1.5 w-full rounded-md border border-accent-light/60 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-60"
            {...register("name", {
              required: formContent.validation.nameRequired,
            })}
          />
          {errors.name && (
            <p className="mt-1 text-xs text-primary">{errors.name.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-text">
            {formContent.email}
          </label>
          <input
            id="email"
            type="email"
            disabled={isDisabled}
            placeholder={formContent.emailPlaceholder}
            className="mt-1.5 w-full rounded-md border border-accent-light/60 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-60"
            {...register("email", {
              required: formContent.validation.emailRequired,
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: formContent.validation.emailInvalid,
              },
            })}
          />
          {errors.email && (
            <p className="mt-1 text-xs text-primary">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-text">
            {formContent.phone}{" "}
            <span className="font-normal text-muted">
              ({formContent.phoneOptional})
            </span>
          </label>
          <input
            id="phone"
            type="tel"
            disabled={isDisabled}
            placeholder={formContent.phonePlaceholder}
            className="mt-1.5 w-full rounded-md border border-accent-light/60 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-60"
            {...register("phone")}
          />
        </div>

        <div>
          <label
            htmlFor="subject"
            className="block text-sm font-medium text-text"
          >
            {formContent.subject}
          </label>
          <select
            id="subject"
            disabled={isDisabled}
            defaultValue=""
            className="mt-1.5 w-full rounded-md border border-accent-light/60 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-60"
            {...register("subject", {
              required: formContent.validation.subjectRequired,
            })}
          >
            <option value="" disabled>
              {formContent.subjectPlaceholder}
            </option>
            {formContent.subjectOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.subject && (
            <p className="mt-1 text-xs text-primary">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-text"
          >
            {formContent.message}
          </label>
          <textarea
            id="message"
            rows={5}
            disabled={isDisabled}
            placeholder={formContent.messagePlaceholder}
            className="mt-1.5 w-full resize-y rounded-md border border-accent-light/60 bg-bg px-4 py-2.5 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-60"
            {...register("message", {
              required: formContent.validation.messageRequired,
            })}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-primary">{errors.message.message}</p>
          )}
        </div>

        <div>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              disabled={isDisabled}
              className="mt-1 h-4 w-4 rounded border-accent-light/60 text-primary focus:ring-primary"
              {...register("privacy", {
                required: formContent.validation.privacyRequired,
              })}
            />
            <span className="text-sm text-muted">{formContent.privacy}</span>
          </label>
          {errors.privacy && (
            <p className="mt-1 text-xs text-primary">{errors.privacy.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isDisabled}
          className="inline-flex w-full items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
        >
          {isLoading ? formContent.loading : formContent.submit}
        </button>

        {submitStatus === "success" && (
          <button
            type="button"
            onClick={() => setSubmitStatus("idle")}
            className="mt-3 text-sm font-medium text-primary underline-offset-2 hover:underline"
          >
            {formContent.sendAnother}
          </button>
        )}
      </div>
    </form>
  );
}
