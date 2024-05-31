import { z } from "zod";

export const RegisterSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  studentNumber: z
    .string()
    .refine((value) => !isNaN(Number(value)) && value !== "", {
      message: "Student number must be a number",
    })
    .transform((value) => Number(value))
    .refine((value) => value > 0, {
      message: "Student number must be a positive number",
    }),
  cohort: z
    .string()
    .min(1, "Cohort is required")
    .regex(/^\d{4}-\d{4}$/, {
      message: "Cohort must be in the format YYYY-YYYY",
    }),
  passId: z.string().min(1, "Pass ID is required"),
});
