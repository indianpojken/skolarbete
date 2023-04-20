import * as yup from 'yup';

const schema = yup.object({
  body: yup.object({
    artist: yup.string().required(),
    date: yup.string().required(),
    arena: yup.string().required(),
    time: yup.string().required(),
    price: yup.string().required(),
    tickets: yup.number().positive().required(),
  })
});

export { schema as eventValidator };
