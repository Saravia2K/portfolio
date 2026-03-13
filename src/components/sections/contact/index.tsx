import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import PageSection from "@/components/common/page-section";
import SectionTitle from "@/components/common/section-title";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Textarea from "@/components/forms/textarea";
import { Button } from "@/components/ui/button";
import FormError from "@/components/forms/error";
import { Spinner } from "@/components/ui/spinner";
import type { AsPage } from "@/lib/types";

const Schema = z.object({
  name: z.string().min(1, "El nombre es requerido"),
  email: z.email("Ingrese un correo electrónico válido"),
  description: z
    .string()
    .min(1, "Por favor, escribe lo más detallado posible tu idea para poder ayudarte"),
});
type FormValues = z.infer<typeof Schema>;

export default function Contact({ asPage }: AsPage) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<FormValues>({
    resolver: zodResolver(Schema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const fetchResponse = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      if (!fetchResponse.ok) throw new Error("Error al enviar el correo");

      toast.success(
        "Tu mensaje fue enviado con éxito. Me comunicaré contigo en la brevedad.",
      );
    } catch (error) {
      toast.error(
        "Hubo un error al intentar enviar el formulario. Por favor, inténtalo de nuevo más tarde.",
      );
    }
  };

  const formSubmitting = isValidating || isSubmitting;
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>Contáctame</SectionTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-10 gap-10 sm:grid sm:grid-cols-2">
          <div className="max-sm:mb-10">
            <Label htmlFor="name">Nombre</Label>
            <Input
              {...register("name")}
              placeholder="Escribe tu nombre aquí"
              type="text"
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </div>
          <div>
            <Label htmlFor="email">Correo</Label>
            <Input
              {...register("email")}
              placeholder="Escribe tu correo electrónico"
              type="email"
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
        </div>
        <div>
          <Label>Cuéntame un poco en qué te puedo ayudar</Label>
          <Textarea
            {...register("description")}
            placeholder="Escribe tu mensaje..."
            rows={4}
            className="resize-none"
          />
          {errors.description && (
            <FormError>{errors.description.message}</FormError>
          )}
        </div>
        <Button
          type="submit"
          className="mt-10"
          variant="secondary"
          disabled={formSubmitting}
        >
          {formSubmitting && <Spinner />}
          {formSubmitting ? "Enviando..." : "Contactar"}
        </Button>
      </form>
    </PageSection>
  );
}
