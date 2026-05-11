"use client";

import { FormEvent, useMemo, useState } from "react";
import { COMPANY, whatsappHref } from "@/app/data";

type FormState = {
  name: string;
  phone: string;
  origin: string;
  destination: string;
  service: string;
  message: string;
};

const initialState: FormState = {
  name: "",
  phone: "",
  origin: "",
  destination: "",
  service: "Mudanza o transporte",
  message: ""
};

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [submitted, setSubmitted] = useState(false);

  const whatsappMessage = useMemo(() => {
    return [
      "Hola ALBERLICSAC, quiero una cotización.",
      `Nombre: ${form.name || "-"}`,
      `Teléfono: ${form.phone || "-"}`,
      `Servicio: ${form.service}`,
      `Origen: ${form.origin || "-"}`,
      `Destino: ${form.destination || "-"}`,
      `Detalle: ${form.message || "-"}`
    ].join("\n");
  }, [form]);

  function updateField(field: keyof FormState, value: string) {
    setForm((current) => ({ ...current, [field]: value }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    window.open(whatsappHref(COMPANY.whatsapp[0].number, whatsappMessage), "_blank");
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-grid">
        <label>
          Nombre
          <input
            required
            type="text"
            autoComplete="name"
            value={form.name}
            onChange={(event) => updateField("name", event.target.value)}
            placeholder="Tu nombre"
          />
        </label>
        <label>
          WhatsApp
          <input
            required
            type="tel"
            autoComplete="tel"
            value={form.phone}
            onChange={(event) => updateField("phone", event.target.value)}
            placeholder="+51 ..."
          />
        </label>
      </div>

      <label>
        Servicio
        <select
          value={form.service}
          onChange={(event) => updateField("service", event.target.value)}
        >
          <option>Mudanza o transporte</option>
          <option>Carga y descarga</option>
          <option>Embalaje y desembalaje</option>
          <option>Plataforma hidráulica</option>
          <option>Traslado de mascota</option>
          <option>Traslado de vehículo</option>
          <option>Limpieza</option>
          <option>Mudanza compartida</option>
          <option>Mudanza internacional</option>
        </select>
      </label>

      <div className="form-grid">
        <label>
          Origen
          <input
            type="text"
            value={form.origin}
            onChange={(event) => updateField("origin", event.target.value)}
            placeholder="Distrito, ciudad o país"
          />
        </label>
        <label>
          Destino
          <input
            type="text"
            value={form.destination}
            onChange={(event) => updateField("destination", event.target.value)}
            placeholder="Distrito, ciudad o país"
          />
        </label>
      </div>

      <label>
        Detalles
        <textarea
          value={form.message}
          onChange={(event) => updateField("message", event.target.value)}
          placeholder="Cuéntanos fecha tentativa, piso, ascensor, objetos pesados o cualquier detalle importante."
          rows={5}
        />
      </label>

      <button className="form-submit" type="submit">
        Enviar cotización por WhatsApp
      </button>

      {submitted && (
        <p className="form-feedback">
          Abrimos WhatsApp con tu solicitud lista para enviar.
        </p>
      )}
    </form>
  );
}
