import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  nombre: Yup.string()
    .required("Tu nombre es un requisito para registrarte")
    .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)?$/, 'Ingresa solo letras y máximo 2 nombres'),

  apellido: Yup.string()
    .required("Tu apellido es un requisito para registrarte")
    .matches(/^[a-zA-Z]+(?: [a-zA-Z]+)?$/, 'Ingresa solo letras y máximo 2 apellidos'),

  email: Yup.string()
    .required("Tu correo electrónico es necesario para contactarte")
    .email("Ingresa una dirección de correo válida"),
  telefono: Yup.string()
    .required("Tu número teléfonico es necesario para contactarte")
    .matches(/^[0-9]{9}$/, "Ingresa un número de celular válido de 9 dígitos"),

  politics: Yup.boolean().oneOf(
    [true],
    "Debes aceptar las políticas de privacidad"
  ),
  terms: Yup.boolean().oneOf(
    [true],
    "Debes aceptar los términos y condiciones"
  ),
});

export default validationSchema;
