import { NextResponse, NextRequest } from "next/server";
import { ReclamacionesTemplate } from "@/components/core/Resend/ReclamacionesTemplate";
import { formatDate } from "@/shared/functions/formatDates";
import { Resend } from 'resend';

const resend = new Resend(process.env.Resend_SK);
export function GET() {

  return NextResponse.json({
    message: "works!"
  })
}

export async function POST(request: NextRequest) {

  const { fecha = formatDate(new Date()),
    hojaReclamacion = '',
    nombres = '',
    apellidoPaterno = '',
    apellidoMaterno = '',
    dni = '',
    telefono = '',
    domicilio = '',
    email = '',
    padresNombre = '',
    tipoDeServicio = '',
    monto = '',
    archivo = '',
    descripcion = '',
    reclamoOQueja = '',
    detalle = '',
    pedido = '',
    checkbox = false, } = await request.json();

  try {

    const { data, error } = await resend.emails.send({
      from: 'Proyecta Innova TR SAC - Reclamo <admin@inmobiliariaproyectainnova.com>',
      to: ['camilo.b.q@hotmail.com', 'radsance.pe@gmail.com'],
      subject: 'Reclamo',
      react: ReclamacionesTemplate({
        fecha,
        hojaReclamacion,
        nombres,
        apellidoPaterno,
        apellidoMaterno,
        dni,
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
      }),
      text: ''
    });

    if (error) {
      return NextResponse.json({ message: "Hubo un error al enviar mensaje, es posible que la mensajería no esté disponible", error: true });
    }
    return NextResponse.json({ data, error: false });
  } catch (error) {
    return NextResponse.json({ message: "Error", error: true, description: error })
  }
}
