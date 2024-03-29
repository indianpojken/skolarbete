import * as yup from 'yup';

const schema = yup.object({
  body: yup.object({
    number: yup.string().required('Ticket number is required')
  })
});

export { schema as verifySchema };
