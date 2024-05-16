import * as Yup from 'yup';

const SignupSchema = Yup.object().shape({
  nombres: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  apellidoPaterno: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  apellidoMaterno: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  dni: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  telefono: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  domicilio: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  descripcion: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  detalle: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  pedido: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required(),
  checkbox: Yup.boolean().oneOf([true])
    .required(),
});

export default SignupSchema;