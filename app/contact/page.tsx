import { Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "Contact",
  description: "Contact En Dee Textiles Industries for textile manufacturing, processing, sourcing, and business inquiries.",
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionHeading
        eyebrow="Contact us"
        title="Start a conversation about your textile requirement."
        description="Use the form below to share your project details, order interest, or sourcing needs. We’ll respond with the next steps and business coordination information."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6 rounded-[2rem] border border-[#172b3d] bg-[#172b3d] p-8 text-white">
          <div>
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#d7b086]">Company</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em]">En Dee Textiles Industries</h3>
          </div>

          <div className="space-y-5 text-sm text-[#e8e2dd]">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="mt-1 text-[#f0d343]" />
              <span>{company.location}</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone size={18} className="text-[#f0d343]" />
              <span>{company.phone}</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail size={18} className="text-[#f0d343]" />
              <span>{company.email}</span>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.25em] text-[#f0d343]">General manager</p>
            <p className="mt-3 text-xl font-semibold">{company.manager}</p>
          </div>

          <div className="h-56 overflow-hidden rounded-[1.5rem] border border-white/10">
            <div
              className="h-full w-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80')",
              }}
            />
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#e5e9ed] bg-[#f5f7f9] p-6 md:p-8">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
