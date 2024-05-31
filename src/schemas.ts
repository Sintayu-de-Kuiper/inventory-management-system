import { z } from "zod";

export const RegisterDataSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  studentNumber: z
    .number()
    .int()
    .positive("Student number must be a positive integer"),
  className: z.string().min(1, "Class name is required"),
  passId: z.string().min(1, "Pass ID is required"),
});
