"use client";

import Image from "next/image";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { company } from "@/lib/content";

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  code: "+234",
  phone: "",
  message: "",
  terms: false,
};

export default function Form() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const update = (key, value) => {
    setValues((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setStatus("idle");
  };

  const validate = () => {
    const next = {};
    if (!values.firstName.trim()) next.firstName = "Enter your first name.";
    if (!values.lastName.trim()) next.lastName = "Enter your last name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      next.email = "Enter a valid email address.";
    }
    if (!/^[0-9+\s()-]{7,}$/.test(values.phone.trim())) {
      next.phone = "Enter a phone number.";
    }
    if (!values.message.trim()) next.message = "Enter a message.";
    if (!values.terms) next.terms = "Agree with the Terms of Use and Privacy Policy to continue.";
    return next;
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length) {
      setStatus("error");
      return;
    }
    setStatus("success");
  };

  return (
    <section id="contact" className="relative overflow-hidden border-t border-line bg-ice">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,184,217,0.14),transparent_52%)]"
        aria-hidden="true"
      />
      <div className="relative mx-auto grid max-w-content items-start gap-10 px-gutter py-section sm:px-gutter-sm sm:py-section-sm lg:grid-cols-2 lg:px-gutter-lg">
        <div className="lg:pt-1">
          <Image src="/images/logo.png" alt="Algorizmi Health" width={1972} height={506} className="h-12 w-auto" />
          <h2 className="mt-6 font-heading text-[1.75rem] font-semibold tracking-tight text-space sm:text-4xl">
            Get in Touch with Algorizmih
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-body">
            The form checks your details in this browser. It does not send them to a server. You can also email{" "}
            <a className="underline decoration-cyanInk underline-offset-4 outline-none focus-visible:shadow-focus" href={company.emailHref}>
              {company.email}
            </a>{" "}
            or call {company.phone}.
          </p>
        </div>

        <div className="rounded-3xl border border-line bg-white p-5 shadow-card sm:p-8">
        {status === "success" ? (
          <div role="status">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-success">Ready</p>
            <h3 className="mt-3 font-heading text-3xl font-semibold text-space">
              Thank you, {values.firstName}.
            </h3>
            <p className="mt-4 text-base leading-relaxed text-body">
              Your message is checked and stays in this browser. To reach Algorizmih, email {company.email} or call{" "}
              {company.phone}, {company.hoursLabel} {company.hours}.
            </p>
            <Button
              text="Send another message"
              className="mt-8"
              onClick={() => {
                setValues(initialValues);
                setErrors({});
                setStatus("idle");
              }}
            />
          </div>
        ) : (
          <form className="space-y-5" onSubmit={onSubmit} noValidate>
            {status === "error" ? (
              <p role="alert" className="rounded-2xl border border-danger/30 bg-red-50 px-4 py-3 text-sm text-danger">
                Check the highlighted fields.
              </p>
            ) : null}
            <div className="grid gap-4 sm:grid-cols-2">
              <Field
                id="firstName"
                label="First Name"
                value={values.firstName}
                error={errors.firstName}
                onChange={(value) => update("firstName", value)}
                placeholder="Enter First Name"
              />
              <Field
                id="lastName"
                label="Last Name"
                value={values.lastName}
                error={errors.lastName}
                onChange={(value) => update("lastName", value)}
                placeholder="Last Name"
              />
            </div>
            <Field
              id="email"
              label="Email"
              type="email"
              value={values.email}
              error={errors.email}
              onChange={(value) => update("email", value)}
              placeholder="Email Address"
            />
            <div>
              <label htmlFor="phone" className="text-sm font-medium text-navy">
                Phone Number
              </label>
              <div className="mt-2 flex">
                <label htmlFor="code" className="sr-only">
                  Country code
                </label>
                <select
                  id="code"
                  value={values.code}
                  onChange={(event) => update("code", event.target.value)}
                  className={`${controlClass} min-h-12 rounded-l-xl px-3 py-3 text-sm ${errors.phone ? "border-danger" : ""}`}
                >
                  <option value="+234">+234</option>
                  <option value="+1">+1</option>
                  <option value="+44">+44</option>
                </select>
                <input
                  id="phone"
                  type="tel"
                  value={values.phone}
                  onChange={(event) => update("phone", event.target.value)}
                  placeholder="Phone Number"
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className={`${controlClass} min-h-12 w-full rounded-r-xl border-l-0 px-3 py-3 ${errors.phone ? "border-danger" : ""}`}
                />
              </div>
              {errors.phone ? (
                <p id="phone-error" className="mt-2 text-sm text-danger">
                  {errors.phone}
                </p>
              ) : null}
            </div>
            <div>
              <label htmlFor="message" className="text-sm font-medium text-navy">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={(event) => update("message", event.target.value)}
                placeholder="Your message"
                aria-invalid={Boolean(errors.message)}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={`${controlClass} mt-2 min-h-32 w-full rounded-xl px-3 py-3 ${errors.message ? "border-danger" : ""}`}
              />
              {errors.message ? (
                <p id="message-error" className="mt-2 text-sm text-danger">
                  {errors.message}
                </p>
              ) : null}
            </div>
            <div className="flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <label htmlFor="terms" className="flex items-start gap-2 text-sm text-body">
                  <input
                    id="terms"
                    type="checkbox"
                    checked={values.terms}
                    onChange={(event) => update("terms", event.target.checked)}
                    className="mt-1 h-4 w-4 accent-cyanInk outline-none focus-visible:shadow-focus"
                  />
                  <span>
                    I agree with{" "}
                    <a href="/#trust" className="underline decoration-cyanInk underline-offset-4 outline-none focus-visible:shadow-focus">
                      Terms of Use and Privacy Policy
                    </a>
                  </span>
                </label>
                {errors.terms ? <p className="mt-2 text-sm text-danger">{errors.terms}</p> : null}
              </div>
              <Button text="Send" type="submit" className="w-full sm:w-auto" />
            </div>
          </form>
        )}
        </div>
      </div>
    </section>
  );
}

const controlClass =
  "border border-line bg-ice text-base text-space outline-none transition duration-150 placeholder:text-muted focus:border-cyanInk focus:bg-white focus-visible:shadow-focus";

function Field({ id, label, value, onChange, error, placeholder, type = "text" }) {
  return (
    <div>
      <label htmlFor={id} className="text-sm font-medium text-navy">
        {label}
      </label>
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(event) => onChange(event.target.value)}
        aria-invalid={Boolean(error)}
        aria-describedby={error ? `${id}-error` : undefined}
        className={`${controlClass} mt-2 min-h-12 w-full rounded-xl px-3 py-3 ${error ? "border-danger" : ""}`}
      />
      {error ? (
        <p id={`${id}-error`} className="mt-2 text-sm text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}
