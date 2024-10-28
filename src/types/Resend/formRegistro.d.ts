interface IFormRegistro {
  fecha: date,
  nombre: string,
  apellido: string,
  email: string,
  DNI?: string,
  telefono: string,
  terms: boolean,
  politics: boolean,
}

export { IFormRegistro }