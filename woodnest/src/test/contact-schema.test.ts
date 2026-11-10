import { describe, expect, it } from "vitest";
import { contactSchema } from "@/lib/contact-schema";
import { formatPrice } from "@/data/products";

describe("contact form validation", () => {
  it("accepts a complete message", () => {
    const result = contactSchema.safeParse({
      name: "Priya",
      email: "priya@example.com",
      message: "I would like to know more about the sofa.",
    });
    expect(result.success).toBe(true);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({
      name: "Priya",
      email: "not-an-email",
      message: "I would like to know more about the sofa.",
    });
    expect(result.success).toBe(false);
  });

  it("rejects empty name and message", () => {
    const result = contactSchema.safeParse({ name: " ", email: "a@b.co", message: "" });
    expect(result.success).toBe(false);
  });
});

describe("prices", () => {
  it("shows prices in Indian Rupees", () => {
    expect(formatPrice(42999)).toBe("₹42,999");
  });
});
