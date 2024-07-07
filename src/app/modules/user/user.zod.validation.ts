import {z} from 'zod';

export const userZodValidation = z.object({
  id: z.string(),
  password: z.string().max(20, {message:'password can not more than 20'}),
  needsPasswordChange: z.boolean().optional().default(true),
  role: z.enum(['Admin', 'student', 'faculty']),
  status: z.enum(['in-progress', 'blocked']),
  isDeleted: z.boolean().optional().default(false),
});
