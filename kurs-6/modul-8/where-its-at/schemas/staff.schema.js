import * as yup from 'yup';

const schema = yup.object({
  username: yup.string().required(),
  password: yup.string().required()
});

export { schema as staffSchema };
