import PageSection from "@/components/common/page-section";
import SectionTitle from "@/components/common/section-title";
import Input from "@/components/forms/input";
import Label from "@/components/forms/label";
import Textarea from "@/components/forms/textarea";
import { Button } from "@/components/ui/button";

import type { AsPage } from "@/lib/types";

export default function Contact({ asPage }: AsPage) {
  return (
    <PageSection asPage={asPage}>
      <SectionTitle>Contáctame</SectionTitle>
      <form>
        <div className="mb-10 grid grid-cols-2 gap-10">
          <div>
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              placeholder="Escribe tu nombre aquí"
              type="text"
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Correo</Label>
            <Input id="email" placeholder="Escribe tu correo electrónico" />
          </div>
        </div>
        <div>
          <Label>Cuéntame un poco en qué te puedo ayudar</Label>
          <Textarea
            placeholder="Escribe tu mensaje..."
            rows={4}
            className="resize-none"
          />
        </div>
        <Button type="submit" className="mt-10" variant="secondary">
          Contactar
        </Button>
      </form>
    </PageSection>
  );
}
