import { createServerFn } from "@tanstack/react-start";
import Mailjet from "node-mailjet";

import { EmailSchema } from "./email.utils";
import { getEnv } from "#/lib/server-utils";

export const sendEmail = createServerFn({ method: "POST" })
  .inputValidator(EmailSchema)
  .handler(async ({ data }) => {
    const mailjet = new Mailjet({
      apiKey: getEnv("MJ_API_KEY") || "",
      apiSecret: getEnv("MJ_SECRET_KEY") || "",
    });

    const request = await mailjet
      .post("send", { version: `v${Number(getEnv("MJ_VERSION"))}` })
      .request({
        Messages: [
          {
            From: {
              Email: getEnv("FROM_EMAIL") || "",
              Name: "Portafolio",
            },
            To: [
              {
                Email: getEnv("TO_EMAIL") || "",
                Name: "Diego Saravia",
              },
            ],
            Subject: `Recibiste de ${data.name} desde el portafolio`,
            TextPart: `Nombre: ${data.name}\nCorreo: ${data.email}\nMensaje: ${data.description}`,
            HTMLPart: `<h3>Nombre: ${data.name}</h3><p>Correo: ${data.email}</p><p>Mensaje: ${data.description}</p>`,
          },
        ],
      });

    return request.response.status === 200;
  });
