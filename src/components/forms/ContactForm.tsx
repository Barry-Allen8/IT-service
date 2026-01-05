"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type ContactFormData } from "@/lib/validations";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import { Send } from "lucide-react";
import { useTranslations } from "next-intl";

export default function ContactForm() {
  const t = useTranslations("contact.form");
  const tServices = useTranslations("services_menu");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"success" | "error" | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      console.log("Form data:", data);
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus("success");
      reset();
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <Input
        label={t("name")}
        placeholder={t("name_placeholder")}
        {...register("name")}
        error={errors.name?.message}
      />

      <Input
        label={t("email")}
        type="email"
        placeholder={t("email_placeholder")}
        {...register("email")}
        error={errors.email?.message}
      />

      <Input
        label={t("phone")}
        type="tel"
        placeholder={t("phone_placeholder")}
        {...register("phone")}
        error={errors.phone?.message}
      />

      <div>
        <label className="block text-sm font-medium mb-2">{t("service")}</label>
        <select
          {...register("service")}
          className="w-full px-4 py-3 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
        >
          <option value="">{t("service_placeholder")}</option>
          <option value="websites">{tServices("websites")}</option>
          <option value="chatbots">{tServices("chatbots")}</option>
          <option value="ai">{tServices("ai_solutions")}</option>
          <option value="mobile">{tServices("mobile_apps")}</option>
          <option value="consulting">{tServices("consulting")}</option>
        </select>
      </div>

      <Textarea
        label={t("message")}
        placeholder={t("message_placeholder")}
        {...register("message")}
        error={errors.message?.message}
      />

      <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
        {isSubmitting ? t("submitting") : t("submit")}
        <Send className="w-5 h-5" />
      </Button>

      {submitStatus && (
        <div
          className={`p-4 rounded-lg ${
            submitStatus === "success"
              ? "bg-green-50 text-green-800"
              : "bg-red-50 text-red-800"
          }`}
        >
          {submitStatus === "success" ? t("success") : t("error")}
        </div>
      )}
    </form>
  );
}
