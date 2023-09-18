import sendgrid from "@sendgrid/mail";
import { NextResponse } from "next/server";

sendgrid.setApiKey(process.env.SG_API_KEY ?? "");

export const dynamic = "force-static";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    sendgrid
      .send({
        to: "facundo.pellicer@fidooo.com",
        from: "facundo.pellicer@fidooo.com",
        subject: `Nueva consulta`,
        html: `<div>
        <div>en qué puedo ayudarte? ${body.firstStep}</div>
        <div>email y teléfono: ${body.secondStep}</div>
        <div>tu nombre: ${body.thirdStep}</div>
        </div>`,
      })
      .then(() => {
        return NextResponse.json("success", { status: 201 });
      })
      .catch((error) => console.log("ERROR", error));
    return NextResponse.json("success", { status: 201 });
  } catch (error: any) {
    console.log("mailer error", error);
    return NextResponse.json({ error: error?.message });
  }
}

export async function GET(req: Request) {
  return new Response("HELLO SENDGRID");
}
