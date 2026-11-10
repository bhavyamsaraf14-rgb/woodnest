import { useState, type FormEvent, type ReactNode } from "react";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, type ContactValues } from "@/lib/contact-schema";

type Errors = Partial<Record<keyof ContactValues, string>>;

const emptyForm: ContactValues = { name: "", email: "", message: "" };

export function ContactForm() {
  const [values, setValues] = useState<ContactValues>(emptyForm);
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  function update(field: keyof ContactValues, value: string) {
    setValues((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const result = contactSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: Errors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof ContactValues;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    // No backend: just show a success message and reset the form.
    setSubmitted(true);
    setValues(emptyForm);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border bg-card p-10 text-center shadow-card" role="status">
        <CheckCircle2 className="h-12 w-12 text-success" />
        <h3 className="text-2xl font-semibold">Thank you!</h3>
        <p className="text-muted-foreground">
          Your message has been sent. Our team will get back to you soon.
        </p>
        <Button variant="outline" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5 rounded-2xl border bg-card p-6 shadow-card sm:p-8">
      <Field id="name" label="Name" error={errors.name}>
        <Input
          id="name"
          value={values.name}
          onChange={(e) => update("name", e.target.value)}
          placeholder="Your full name"
          maxLength={100}
          aria-invalid={!!errors.name}
          className="h-11"
        />
      </Field>
      <Field id="email" label="Email" error={errors.email}>
        <Input
          id="email"
          type="email"
          value={values.email}
          onChange={(e) => update("email", e.target.value)}
          placeholder="you@example.com"
          maxLength={255}
          aria-invalid={!!errors.email}
          className="h-11"
        />
      </Field>
      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          value={values.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="How can we help you?"
          rows={5}
          maxLength={1000}
          aria-invalid={!!errors.message}
        />
      </Field>
      <Button type="submit" size="xl">
        Send Message
      </Button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string | undefined;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
}
