import * as yup from 'yup';

const schema = yup.object({
  eventID: yup.number().positive().required()
});

export { schema as buySchema };
