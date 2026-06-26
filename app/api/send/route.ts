import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { email, message } = body;

    const data = await resend.emails.send({
      from: "RBIOMEDICS <onboarding@resend.dev>",
      to: "tuemail@gmail.com",
      subject: "Nuevo mensaje de contacto",
      html: `<p>${message}</p><p>De: ${email}</p>`,
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
