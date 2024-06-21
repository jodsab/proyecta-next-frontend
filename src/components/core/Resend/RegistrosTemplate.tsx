import * as React from 'react';
import { IFormRegistro } from '@/types/Resend/formRegistro';

export const RegistrosTemplate: React.FC<IFormRegistro> = ({
  fecha,
  nombre,
  apellido,
  email,
  telefono,
  terms,
  politics,
}: IFormRegistro) => (
  <div>
    <p>Fecha: {fecha}</p>
    <p>Nombres: {nombre}</p>
    <p>Apellidos: {apellido}</p>
    <p>Telefono: {telefono}</p>
    <p>Email: {email}</p>
    <p>Acepta términos y condiciones: {terms ? 'Si' : 'No'}</p>
    <p>Acepta políticas: {politics ? 'Si' : 'No'}</p>
  </div>
);
