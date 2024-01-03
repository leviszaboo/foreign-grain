import { z } from "zod";

export const contactFormSchema = z.object({
    name: z.string(),
    email: z.string().email("This is not a valid email adress."),
    message: z.string()
});
  