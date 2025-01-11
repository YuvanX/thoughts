import z from "zod";

export const signupInput = z.object({
    email: z.string().email(),
    name: z.string(),
    password: z.string().min(6)
})

export const signinInput = z.object({
    email: z.string().email(),
    password: z.string().min(6)
})

export const createBlog = z.object({
    title: z.string(),
    content: z.string()
})

export const updateUser = z.object({
    name: z.string().optional(),
    password: z.string().optional()
})

export const updateBlog = z.object({
    title: z.string(),
    content: z.string(),
    id: z.string()
})

export type CreateBlog = z.infer<typeof createBlog>;
export type UpdateBlog = z.infer<typeof updateBlog>;
export type SignUpInput = z.infer<typeof signupInput>;
export type SignInInput = z.infer<typeof signinInput>;
export type UpdateUser = z.infer<typeof updateUser>