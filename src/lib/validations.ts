import { z } from "zod";

export const usernameSchema = z
  .string()
  .min(3, "Must be at least 3 characters.")
  .max(20, "Must be at most 20 characters.")
  .regex(/^[a-zA-Z0-9_]+$/, "Letters, numbers, and underscores only.");

export const postUserSchema = z.object({
  email: z.string().email("Invalid email address."),
  name: z.string().max(100).nullable().optional(),
  avatar_url: z.string().url().nullable().optional(),
  username: usernameSchema.optional(),
});

export const patchUserSchema = z.object({
  username: usernameSchema.optional(),
  onboarding_complete: z.boolean().optional(),
  name: z.string().min(1).max(100).optional(),
});
