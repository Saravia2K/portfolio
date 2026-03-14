import * as z from "zod"

export const EmailSchema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.email("Ingrese un correo electrónico válido"),
  description: z
    .string()
    .min(
      1,
      "Por favor, escribe lo más detallado posible tu idea para poder ayudarte",
    ),
})
