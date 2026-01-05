import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити принаймні 2 символи"),
  email: z.string().email("Невірний формат email"),
  phone: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Повідомлення повинно містити принаймні 10 символів"),
});

export const courseRegistrationSchema = z.object({
  name: z.string().min(2, "Ім'я повинно містити принаймні 2 символи"),
  email: z.string().email("Невірний формат email"),
  phone: z.string().min(10, "Невірний формат телефону"),
  plan: z.string().min(1, "Оберіть тариф"),
  agreedToTerms: z.boolean().refine((val) => val === true, {
    message: "Ви повинні погодитись з умовами",
  }),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;
export type CourseRegistrationData = z.infer<typeof courseRegistrationSchema>;
