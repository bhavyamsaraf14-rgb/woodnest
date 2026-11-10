import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Please enter your name (at least 2 characters)" })
    .max(100, { message: "Name must be less than 100 characters" }),
  email: z
    .string()
    .trim()
    .min(1, { message: "Please enter your email" })
    .email({ message: "Please enter a valid email address" })
    .max(255, { message: "Email must be less than 255 characters" }),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message should be at least 10 characters" })
    .max(1000, { message: "Message must be less than 1000 characters" }),
});

export type ContactValues = z.infer<typeof contactSchema>;
