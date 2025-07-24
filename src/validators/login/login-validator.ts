import { z } from "zod";

export const loginValidator = z.object({
  login: z.string().nonempty("o campo de username devee ser preenchido"),
  password: z.string().nonempty().min(6),
});
