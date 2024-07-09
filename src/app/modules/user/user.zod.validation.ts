import {z} from 'zod';

export const userZodValidation = z.object({
  password: z.string({invalid_type_error:'password must be string'}).max(20, {message:'password can not more than 20'}).optional(),
}); 