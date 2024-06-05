import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  studentNumber: z.coerce
    .number({ message: "Student number must be a number" })
    .positive("Student number must be a positive number"),
  cohort: z
    .string()
    .min(1, "Cohort is required")
    .regex(/^\d{4}-\d{4}$/, {
      message: "Cohort must be in the format YYYY-YYYY",
    }),
});

export const LoginSchema = z.object({
  studentNumber: z.coerce
    .number({ message: "Student number must be a number" })
    .positive("Student number must be a positive number"),
});
