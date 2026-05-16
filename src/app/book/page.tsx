"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { concernOptions } from "@/data/services";

const timeSlots = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM"
];

export default function BookPage() {
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    date: "",
    time: ""
  });
  const [selectedConcerns, setSelectedConcerns] = useState<string[]>([]);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successOpen, setSuccessOpen] = useState(false);

  const handleChange = (field: keyof typeof formValues) =>
    (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
    };

  const toggleConcern = (concern: string) => {
    setSelectedConcerns((prev) =>
      prev.includes(concern)
        ? prev.filter((item) => item !== concern)
        : [...prev, concern]
    );
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingFields: string[] = [];

    if (!formValues.firstName.trim()) missingFields.push("First Name");
    if (!formValues.lastName.trim()) missingFields.push("Last Name");
    if (!formValues.phone.trim()) missingFields.push("Phone");
    if (!formValues.email.trim()) missingFields.push("Email");
    if (!formValues.date.trim()) missingFields.push("Date");
    if (!formValues.time.trim()) missingFields.push("Time");
    if (selectedConcerns.length === 0) missingFields.push("At least one concern");

    if (missingFields.length > 0) {
      setSuccessOpen(false);
      setErrorMessage(`Please complete: ${missingFields.join(", ")}.`);
      return;
    }

    setErrorMessage(null);
    setSuccessOpen(true);
  };

  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <p className="pill">Make an Appointment</p>
            <h1 className="mt-5 font-display text-4xl text-ink sm:text-5xl">
              Begin your journey to a brighter, healthier smile today.
            </h1>
            <p className="mt-4 text-base text-ink/70">
              Fill out the form below and we will reach out to confirm your schedule.
            </p>
            <p className="mt-3 text-sm text-ink/60">Fields marked with * are required.</p>
          </div>

          <form className="card-shell space-y-8 p-6" onSubmit={handleSubmit}>
            <div>
              <SectionHeading
                eyebrow="Personal Details"
                title="Tell us about you"
                subtitle="We will reach out to confirm your schedule."
              />
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <label className="text-base text-ink/70">
                  First Name *
                  <input
                    type="text"
                    className="input-field mt-2"
                    value={formValues.firstName}
                    onChange={handleChange("firstName")}
                  />
                </label>
                <label className="text-base text-ink/70">
                  Last Name *
                  <input
                    type="text"
                    className="input-field mt-2"
                    value={formValues.lastName}
                    onChange={handleChange("lastName")}
                  />
                </label>
                <label className="text-base text-ink/70">
                  Phone *
                  <input
                    type="tel"
                    className="input-field mt-2"
                    value={formValues.phone}
                    onChange={handleChange("phone")}
                  />
                </label>
                <label className="text-base text-ink/70">
                  Email *
                  <input
                    type="email"
                    className="input-field mt-2"
                    value={formValues.email}
                    onChange={handleChange("email")}
                  />
                </label>
              </div>
            </div>

            <div>
              <SectionHeading eyebrow="Scheduling" title="Pick your preferred schedule" />
              <div className="mt-6 grid gap-6 lg:grid-cols-[1fr_1.4fr]">
                <label className="text-base text-ink/70">
                  Date of Visit *
                  <input
                    type="date"
                    className="input-field mt-2"
                    value={formValues.date}
                    onChange={handleChange("date")}
                  />
                </label>
                <div>
                  <p className="text-base text-ink/70">Time of Visit *</p>
                  <div className="mt-3 grid gap-3 sm:grid-cols-2">
                    {timeSlots.map((slot) => (
                      <label key={slot} className="flex items-center gap-2 text-base text-ink/70">
                        <input
                          type="radio"
                          name="time"
                          className="h-4 w-4 accent-olive"
                          value={slot}
                          checked={formValues.time === slot}
                          onChange={handleChange("time")}
                        />
                        {slot}
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading
                eyebrow="Concerns"
                title="Your concerns"
                subtitle="Select all services that apply."
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {concernOptions.map((concern) => (
                  <label
                    key={concern}
                    className="flex items-center gap-3 rounded-2xl border border-sand bg-white/80 px-4 py-3 text-base text-ink/70"
                  >
                    <input
                      type="checkbox"
                      className="h-4 w-4 accent-olive"
                      checked={selectedConcerns.includes(concern)}
                      onChange={() => toggleConcern(concern)}
                    />
                    {concern}
                  </label>
                ))}
              </div>
            </div>

            <button type="submit" className="btn-primary w-full">
              Click to Schedule Appointment
            </button>
          </form>
        </div>
      </section>

      {errorMessage ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
          <div className="card-shell w-full max-w-md p-6" role="dialog" aria-modal="true">
            <h3 className="font-display text-xl text-ink">Please complete the form</h3>
            <p className="mt-3 text-base text-ink/70">{errorMessage}</p>
            <button
              type="button"
              className="btn-primary mt-6 w-full"
              onClick={() => setErrorMessage(null)}
            >
              Okay, I will fill it out
            </button>
          </div>
        </div>
      ) : null}

      {successOpen ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/40 px-4">
          <div className="card-shell w-full max-w-md p-6" role="dialog" aria-modal="true">
            <h3 className="font-display text-xl text-ink">Appointment request sent</h3>
            <p className="mt-3 text-base text-ink/70">
              Thank you! Your request was submitted successfully. We will reach out
              to you soon to confirm your schedule.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                className="btn-primary"
                onClick={() => setSuccessOpen(false)}
              >
                Close
              </button>
              <Link href="/location" className="btn-secondary">
                Not sure how to get here? Contact us
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
