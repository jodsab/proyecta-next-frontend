interface IFormReclamo {
  fecha: date,
  hojaReclamacion?: string,
  nombres: string,
  apellidoPaterno: string,
  apellidoMaterno: string,
  telefono: string,
  domicilio: string,
  email?: string,
  padresNombre?: string,
  tipoDeServicio?: string,
  monto?: string,
  archivo?: string,
  descripcion: string,
  reclamoOQueja?: string,
  detalle: string,
  pedido: string,
  checkbox: boolean,
}

export { IFormReclamo }