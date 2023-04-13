import * as yup from 'yup';

const schema = yup.object({
  headers: yup.object({
    'api-key': yup.string().required()
  })
});

export { schema as apiKeySchema };
