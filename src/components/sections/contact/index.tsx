import * as z from "zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import { m } from "@/paraglide/messages";

import PageSection from "@/components/common/page-section";
import SectionTitle from "@/components/common/section-title";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Textarea from "@/components/forms/textarea";
import { Button } from "@/components/ui/button";
import FormError from "@/components/forms/error";
import { Spinner } from "@/components/ui/spinner";

import type { AsPage } from "@/lib/types";
import { EmailSchema } from "@/utils/email.utils";
import { sendEmail } from "@/utils/email.function";

type FormValues = z.infer<typeof EmailSchema>;

export default function Contact({ asPage }: AsPage) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isValidating },
  } = useForm<FormValues>({
    resolver: zodResolver(EmailSchema),
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const handleFormSubmit: SubmitHandler<FormValues> = async (data) => {
    try {
      const emailSent = await sendEmail({ data });
      if (!emailSent) throw new Error("Error al enviar el correo");

      toast.success(m.success_message());
      reset();
    } catch (error) {
      toast.error(m.error_message());
    }
  };

  const formSubmitting = isValidating || isSubmitting;
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>{m.contact_me()}</SectionTitle>
      <form onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-10 gap-10 sm:grid sm:grid-cols-2">
          <div className="max-sm:mb-10">
            <Label htmlFor="name">{m.name_label()}</Label>
            <Input
              {...register("name")}
              placeholder={m.name_placeholder()}
              type="text"
            />
            {errors.name && <FormError>{errors.name.message}</FormError>}
          </div>
          <div>
            <Label htmlFor="email">{m.email_label()}</Label>
            <Input
              {...register("email")}
              placeholder={m.email_placeholder()}
              type="email"
            />
            {errors.email && <FormError>{errors.email.message}</FormError>}
          </div>
        </div>
        <div>
          <Label>{m.message_label()}</Label>
          <Textarea
            {...register("description")}
            placeholder={m.message_placeholder()}
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
          {formSubmitting ? m.sending() : m.contact()}
        </Button>
      </form>
    </PageSection>
  );
}
