import { NextResponse, NextRequest } from "next/server";
import { RegistrosTemplate } from "@/components/core/Resend/RegistrosTemplate";
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
    nombre = "",
    apellido = "",
    email = "",
    DNI = "",
    telefono = "",
    terms = false,
    politics = false, } = await request.json();

  try {

    const { data, error } = await resend.emails.send({
      from: 'Proyecta Innova TR SAC - Registro <admin@inmobiliariaproyectainnova.com>',
      to: ['camilo.b.q@hotmail.com', 'radsance.pe@gmail.com'],
      subject: 'Registro',
      react: RegistrosTemplate({
        fecha,
        nombre,
        apellido,
        email,
        DNI,
        telefono,
        terms,
        politics,
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
