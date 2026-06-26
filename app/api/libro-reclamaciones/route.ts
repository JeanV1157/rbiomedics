import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { firstName, lastName, dni, phone, email, reason, message } =
      await req.json();

    // Validación básica
    if (
      !firstName ||
      !lastName ||
      !dni ||
      !phone ||
      !email ||
      !reason ||
      !message
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "Todos los campos son obligatorios.",
        },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "Libro de Reclamaciones <gerencia@rbiomedics.com>", // Cambiarás esto cuando verifiques tu dominio
      to: "gerencia@rbiomedics.com",
      replyTo: email,
      subject: `📋 Nuevo ${reason} - Libro de Reclamaciones`,

      html: `
    <!DOCTYPE html>
    <html>
    <body style="margin:0;background:#f4f6f8;font-family:Arial, Helvetica, sans-serif;">

        <div style="max-width:720px;margin:0 auto;padding:30px;">

        <!-- HEADER -->
        <div style="background:#0B4D80;padding:20px 25px;border-radius:14px 14px 0 0;">
            <h1 style="color:#fff;margin:0;font-size:20px;">
            RBIOMEDICS S.A.C.
            </h1>
            <p style="color:#cfe3ff;margin:5px 0 0;font-size:13px;">
            Libro de Reclamaciones - Nueva Solicitud
            </p>
        </div>

        <!-- BODY -->
        <div style="background:#ffffff;padding:25px;border-radius:0 0 14px 14px;">

            <!-- BADGE -->
            <div style="margin-bottom:20px;">
            <span style="
                display:inline-block;
                padding:6px 12px;
                border-radius:999px;
                font-size:12px;
                font-weight:bold;
                background:${reason === "Reclamo" ? "#ffe5e5" : reason === "Queja" ? "#fff3cd" : "#e7f1ff"};
                color:${reason === "Reclamo" ? "#b30000" : reason === "Queja" ? "#8a6d00" : "#0B4D80"};
            ">
                ${reason.toUpperCase()}
            </span>
            </div>

            <!-- INFO GRID -->
            <table width="100%" style="font-size:14px;color:#333;">
            <tr>
                <td style="padding:6px 0;"><strong>Nombre:</strong></td>
                <td>${firstName}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;"><strong>Apellidos:</strong></td>
                <td>${lastName}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;"><strong>DNI:</strong></td>
                <td>${dni}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;"><strong>Teléfono:</strong></td>
                <td>${phone}</td>
            </tr>
            <tr>
                <td style="padding:6px 0;"><strong>Email:</strong></td>
                <td>${email}</td>
            </tr>
            </table>

            <!-- MESSAGE -->
            <div style="
            margin-top:25px;
            padding:18px;
            background:#f7f9fb;
            border-left:4px solid #0B4D80;
            border-radius:8px;
            ">
            <p style="margin:0 0 8px;font-weight:bold;color:#0B4D80;">
                Descripción del caso
            </p>
            <p style="margin:0;white-space:pre-line;color:#444;line-height:1.6;">
                ${message}
            </p>
            </div>

            <!-- FOOTER INFO -->
            <div style="margin-top:25px;font-size:12px;color:#777;">
            <p style="margin:0;">
                Este mensaje fue generado automáticamente desde el Libro de Reclamaciones de RBIOMEDICS.
            </p>
            </div>

        </div>
        </div>

    </body>
    </html>

      `,
    });

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error interno del servidor.",
      },
      {
        status: 500,
      },
    );
  }
}
