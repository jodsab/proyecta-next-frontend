import { NextResponse } from "next/server";

export async function POST(request) {
  const captcha = await request.json();

  if (!captcha) {
    return NextResponse.json({ error: 'Captcha no proporcionado' });
  }

  const recaptchaSecretKey = process.env.ReCAPTCHA_SK;

  try {
    const response = await fetch(`https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecretKey}&response=${captcha}`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
    });

    const data = await response.json();

    if (data.success) {
      // El reCAPTCHA es válido, puedes continuar con el procesamiento del formulario
      return NextResponse.json(data);
    } else {
      // El reCAPTCHA no es válido
      return NextResponse.json({ success: false, error: 'Captcha no válido' });
    }
  } catch (error) {
    console.error('Error al verificar reCAPTCHA:', error.message);
    return NextResponse.json({ success: false, error: 'Error interno del servidor' });
  }
}

