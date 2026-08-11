import { describe, expect, it } from "vitest";
import { contactSchema } from "./contact-schema";

const validPayload = {
  name: "Jane Doe",
  email: "jane@example.com",
  message: "Hello, I would like to know more.",
};

describe("contactSchema", () => {
  it("accepts a valid payload", () => {
    expect(contactSchema.parse(validPayload)).toEqual(validPayload);
  });

  it("accepts an empty honeypot", () => {
    expect(
      contactSchema.parse({ ...validPayload, honeypot: "" }),
    ).toMatchObject(validPayload);
  });

  it("rejects a filled honeypot", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      honeypot: "bot",
    });

    expect(result.success).toBe(false);
  });

  it("rejects a short name", () => {
    const result = contactSchema.safeParse({ ...validPayload, name: "J" });

    expect(result.success).toBe(false);
  });

  it("rejects an invalid email", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      email: "not-an-email",
    });

    expect(result.success).toBe(false);
  });

  it("rejects a short message", () => {
    const result = contactSchema.safeParse({
      ...validPayload,
      message: "Hi",
    });

    expect(result.success).toBe(false);
  });
});
