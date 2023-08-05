import { z } from "zod";
export const signupInput = z.object({
    username : z.string().min(5).max(15  ),
    password : z.string().min(5).max(20),
});

export type SignupParams = z.infer<typeof signupInput>;