import z from "zod";
export declare const signupInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    name: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
    name?: string;
}, {
    email?: string;
    password?: string;
    name?: string;
}>;
export declare const signinInput: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, "strip", z.ZodTypeAny, {
    email?: string;
    password?: string;
}, {
    email?: string;
    password?: string;
}>;
export declare const createPostInput: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title?: string;
    content?: string;
}, {
    title?: string;
    content?: string;
}>;
export declare const updatePostInput: z.ZodObject<{
    title: z.ZodString;
    Content: z.ZodString;
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    title?: string;
    Content?: string;
    id?: string;
}, {
    title?: string;
    Content?: string;
    id?: string;
}>;
export type signinInput = z.infer<typeof signinInput>;
export type signupInput = z.infer<typeof signupInput>;
export type createPostInput = z.infer<typeof createPostInput>;
export type updatePostInput = z.infer<typeof updatePostInput>;
