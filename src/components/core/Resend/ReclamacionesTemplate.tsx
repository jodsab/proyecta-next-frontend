import * as React from 'react';
import { IFormReclamo } from '@/types/Resend/formReclamo';

export const ReclamacionesTemplate: React.FC<IFormReclamo> = ({
  fecha,
  hojaReclamacion,
  nombres,
  apellidoPaterno,
  apellidoMaterno,
  telefono,
  domicilio,
  email,
  padresNombre,
  tipoDeServicio,
  monto,
  archivo,
  descripcion,
  reclamoOQueja,
  detalle,
  pedido,
  checkbox
}: IFormReclamo) => (
  <div>
    <p>Fecha: {fecha}</p>
    <p>Hoja de reclamación: {hojaReclamacion}</p>
    <p>Nombres: {nombres}</p>
    <p>Apellido Paterno: {apellidoPaterno}</p>
    <p>Apellido Materno: {apellidoMaterno}</p>
    <p>Telefono: {telefono}</p>
    <p>Domicilio: {domicilio}</p>
    <p>Email: {email}</p>
    <p>Nombre del apoderado: {padresNombre}</p>
    <p>Tipo de servicio: {tipoDeServicio}</p>
    <p>Monto: {monto}</p>
    <p>Archivo adjunto: {archivo}</p>
    <p>Descripción: {descripcion}</p>
    <p>Reclamo/Queja: {reclamoOQueja}</p>
    <p>Detalle: {detalle}</p>
    <p>Pedido: {pedido}</p>
    <p>Acepta términos y condiciones: {checkbox ? 'Si' : 'No'}</p>
  </div>
);
