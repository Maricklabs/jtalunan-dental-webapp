"use client";

import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
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

const STORAGE_KEY = "jt-clinic-appointment-draft";

export default function BookPage() {
  const todayISO = new Date().toISOString().split("T")[0];
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
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (!saved) return;

    try {
      const parsed = JSON.parse(saved) as {
        formValues: typeof formValues;
        selectedConcerns: string[];
      };
      if (parsed?.formValues) {
        setFormValues(parsed.formValues);
      }
      if (parsed?.selectedConcerns) {
        setSelectedConcerns(parsed.selectedConcerns);
      }
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  useEffect(() => {
    const payload = JSON.stringify({ formValues, selectedConcerns });
    window.localStorage.setItem(STORAGE_KEY, payload);
  }, [formValues, selectedConcerns]);

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

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const missingFields: string[] = [];

    if (!formValues.firstName.trim()) missingFields.push("First Name");
    if (!formValues.lastName.trim()) missingFields.push("Last Name");
    if (!formValues.phone.trim()) missingFields.push("Phone");
    if (!formValues.email.trim()) missingFields.push("Email");
    if (!formValues.date.trim()) missingFields.push("Date");
    if (!formValues.time.trim()) missingFields.push("Time");
    if (selectedConcerns.length === 0) missingFields.push("At least one concern");
    if (formValues.date && formValues.date < todayISO) {
      missingFields.push("Date must be today or later");
    }

    if (missingFields.length > 0) {
      setSuccessOpen(false);
      setErrorMessage(`Please complete: ${missingFields.join(", ")}.`);
      return;
    }

    if (isSubmitting) return;
    setIsSubmitting(true);

    const payload = {
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      phone: formValues.phone,
      email: formValues.email,
      date: formValues.date,
      time: formValues.time,
      concerns: selectedConcerns
    };

    try {
      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setSuccessOpen(false);
        setErrorMessage(data?.error || "We could not submit your request.");
        return;
      }

      setErrorMessage(null);
      setSuccessOpen(true);
      setFormValues({
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        date: "",
        time: ""
      });
      setSelectedConcerns([]);
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      setSuccessOpen(false);
      setErrorMessage("We could not submit your request. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <section className="section-pad">
        <div className="space-y-10">
          <div>
            <SectionHeading title="Make an Appointment" align="center" size="xl" />
              <br></br><br></br>
            <p className="mt-4 text-base text-ink/70 px-4 10 pt-8">
            Fill out the form below and we will reach out to confirm your schedule. <br></br><br></br>
            Fields marked with * are required.</p>
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
                    min={todayISO}
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

            <button
              type="submit"
              className="btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Schedule Appointment"}
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
