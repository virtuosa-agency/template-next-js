import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must contain at least 2 characters")
    .max(50, "Name cannot exceed 50 characters"),
  email: z
    .string()
    .email("Invalid email format")
    .regex(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      "Invalid email format",
    ),
  message: z
    .string()
    .min(5, "Message must contain at least 5 characters")
    .max(1000, "Message cannot exceed 1000 characters"),
  honeypot: z.string().max(0, "Invalid field").optional(),
  formType: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
