import { z } from 'zod'

export const studentZodSchema = z.object({
  body: z.object({
    student:z.object({
      name: z.object({
        firstName: z
          .string()
          .regex(
            /^[A-Z][a-z]*$/,
            'First name must start with an uppercase letter followed by lowercase letters',
          )
          .nonempty('First name is required'),
        lastName: z.string(),
      }),
      email: z
        .string()
        .email('Invalid email format')
        .nonempty('Email is required'),
      gender: z.enum(['male', 'female', 'others']),
      birthDay: z.string().nonempty('Birthday is required'),
      contactNumber: z
        .string()
        .regex(/^\+?\d{10,15}$/, 'Contact number must be a valid phone number')
        .nonempty('Contact number is required'),
      bloodGroup: z.enum(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']),
      guardian: z.object({
        fatherName: z.string().nonempty('Father name is required'),
        fatherOccupation: z.string().nonempty('Father occupation is required'),
        motherName: z.string().nonempty('Mother name is required'),
        motherOccupation: z.string().nonempty('Mother occupation is required'),
      }),
      profileImage: z.string().url().optional(),
    })
  }),
})

export const studentValidationSchema = {
  studentZodSchema,
}
