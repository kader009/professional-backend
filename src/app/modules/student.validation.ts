import Joi from 'joi'


export const studentJoiSchema = Joi.object({
  id: Joi.string().required().messages({
    'string.base': 'ID must be a string',
  }),
  name: Joi.object({
    firstName: Joi.string()
      .regex(/^[A-Z][a-z]*$/)
      .required()
      .messages({
        'string.base': 'First name must be a string',
      }),
    lastName: Joi.string().optional().messages({
      'string.base': 'Last name must be a string',
    }),
  })
    .required()
    .messages({ 
      'object.base': 'Name must be an object', 
    }),
  email: Joi.string().email({minDomainSegments: 2, tlds:{allow:['com', 'net']}}).required().messages({
    'string.base': 'Email must be a string',
  }),
  gender: Joi.string()
    .valid('male', 'female', 'others')
    .required() 
    .messages({
      'string.base': 'Gender must be a string',
    }),
  birthDay: Joi.date().iso().required().messages({
    'date.base': 'Birthday must be a valid date',
  }),
  contactNumber: Joi.string()
    .pattern(/^\+?\d{10,15}$/)
    .required()
    .messages({
      'string.base': 'Contact number must be a string',
    }),
  bloodGroup: Joi.string()
    .valid('A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-')
    .optional()
    .messages({
      'any.only':
        'Choose from the following blood group options: A+, A-, B+, B-, AB+, AB-, O+, O-',
    }),
  guardian: Joi.object({
    fatherName: Joi.string().required().messages({
      'string.base': 'Father name must be a string',
    }),
    fatherOccupation: Joi.string().required().messages({
      'string.base': 'Father occupation must be a string',
    }),
    motherName: Joi.string().required().messages({
      'string.base': 'Mother name must be a string',
    }),
    motherOccupation: Joi.string().required().messages({
      'string.base': 'Mother occupation must be a string',
    }),
  })
    .required()
    .messages({
      'object.base': 'Guardian must be an object',
    }),
  profileImage: Joi.string().uri().optional().messages({
    'string.base': 'Profile image must be a string',
  }),
  isActive: Joi.string().valid('active', 'inactive').default('active'),
})