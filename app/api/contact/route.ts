import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// util: escape básico anti HTML injection
const escape = (str: string = "") =>
  str.replace(/</g, "&lt;").replace(/>/g, "&gt;");

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = escape(body.name);
    const company = escape(body.company);
    const phone = escape(body.phone);
    const email = escape(body.email);
    const message = escape(body.message);

    // VALIDACIÓN PRO
    if (!name || !email || !message) {
      return Response.json(
        { message: "Campos obligatorios faltantes" },
        { status: 400 },
      );
    }

    // EMAIL PRINCIPAL (a tu empresa)
    const adminEmail = await resend.emails.send({
      from: "RBIOMEDICS <ventas@rbiomedics.com>",
      to: "prueba@rbiomedics.com",
      replyTo: email,
      subject: `📩 Nueva solicitud de información - ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px;background:#f9f9f9;">
          
          <div style="background:white;padding:20px;border-radius:12px;">
            <h2 style="color:#0f172a;">Nueva consulta desde la web</h2>

            <p><b>Nombre:</b> ${name}</p>
            <p><b>Empresa:</b> ${company || "No especificado"}</p>
            <p><b>Teléfono:</b> ${phone || "No especificado"}</p>
            <p><b>Email:</b> ${email}</p>

            <hr style="margin:20px 0;" />

            <p><b>Mensaje:</b></p>
            <p style="white-space:pre-line;">${message}</p>
          </div>

          <p style="font-size:12px;color:#64748b;margin-top:10px;">
            Sistema automático RBIOMEDICS
          </p>
        </div>
      `,
    });

    // AUTO-REPLY al cliente (PRO level 🔥)
    await resend.emails.send({
      from: "RBIOMEDICS <ventas@rbiomedics.com>",
      to: email,
      subject: "Hemos recibido tu solicitud ✔",
      html: `
        <div style="font-family:Arial;padding:20px;">
          <h2>Gracias por contactarte con RBIOMEDICS</h2>

          <p>Hola <b>${name}</b>,</p>

          <p>Hemos recibido tu solicitud de información. Nuestro equipo te responderá en el menor tiempo posible.</p>

          <hr />

          <p><b>Resumen de tu mensaje:</b></p>
          <p style="background:#f3f4f6;padding:10px;border-radius:8px;">
            ${message}
          </p>

          <p style="margin-top:20px;">
            📞 WhatsApp: +51 961 446 461
          </p>

          <p style="font-size:12px;color:#6b7280;">
            Este es un correo automático, por favor no responder.
          </p>
        </div>
      `,
    });

    return Response.json({
      ok: true,
      id: adminEmail.data?.id,
    });
  } catch (error) {
    console.error(error);

    return Response.json(
      { message: "Error interno al enviar el correo" },
      { status: 500 },
    );
  }
}
