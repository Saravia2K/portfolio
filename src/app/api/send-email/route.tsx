import { EmailParams, MailerSend, Recipient, Sender } from "mailersend";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const data = (await req.json()) as Data;

    const API_KEY = process.env.MAILSENDER_TOKEN || "";
    const FROM_EMAIL = process.env.FROM_EMAIL || "";
    const TO_EMAIL = process.env.TO_EMAIL || "";
    const TEMPLATE_ID = process.env.MAILERSEND_TEMPLATE_ID || "";

    const mailerSend = new MailerSend({
      apiKey: API_KEY,
    });

    const sentFrom = new Sender(FROM_EMAIL, "Portafolio");

    const recipients = [new Recipient(TO_EMAIL, "Diego Saravia")];

    const emailParams = new EmailParams()
      .setFrom(sentFrom)
      .setTo(recipients)
      .setReplyTo(sentFrom)
      .setSubject(`Recibiste de ${data.name} desde el portafolio`)
      .setTemplateId(TEMPLATE_ID)
      .setPersonalization([
        {
          email: TO_EMAIL,
          data,
        },
      ]);

    await mailerSend.email.send(emailParams);

    return NextResponse.json({}, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        error,
      },
      { status: 500 },
    );
  }
};

type Data = {
  name: string;
  email: string;
  description: string;
};
