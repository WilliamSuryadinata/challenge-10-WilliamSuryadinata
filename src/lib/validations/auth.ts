import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email({ message: 'Invalid email address' }),
  password: z
    .string()
    .min(6, { message: 'Password must be at least 6 characters' }),
  // Tambahan untuk fitur Remember Me
  rememberMe: z.boolean().optional(),
});

export const registerSchema = z
  .object({
    name: z.string().min(2, { message: 'Name is required' }),
    email: z.string().email({ message: 'Invalid email address' }),
    phoneNumber: z.string().min(9, { message: 'Phone number is invalid' }),
    password: z
      .string()
      .min(6, { message: 'Password must be at least 6 characters' }),
    passwordConfirmation: z.string(),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Passwords do not match',
    path: ['passwordConfirmation'],
  });

export type LoginFormValues = z.infer<typeof loginSchema>;
export type RegisterFormValues = z.infer<typeof registerSchema>;
