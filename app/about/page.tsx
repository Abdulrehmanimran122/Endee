import { Building2, HeartHandshake, Target, Users } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { company } from "@/lib/site-data";

export const metadata = {
  title: "About",
  description: "Learn about En Dee Textiles Industries, its business focus, and its approach to manufacturing and trade.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionHeading
        eyebrow="About us"
        title="A textile business grounded in practical manufacturing and trade insight."
        description="En Dee Textiles Industries operates across textile manufacturing, processing, and trading with a commitment to dependable operational collaboration and consistent commercial communication."
      />

      <div className="mt-14 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="overflow-hidden rounded-[2rem] border border-[#ece2d7] bg-white shadow-[0_18px_50px_rgba(17,17,17,0.04)]">
          <div
            className="h-[440px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://plus.unsplash.com/premium_photo-1663013425512-23e2050e694d?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D')",
            }}
          />
        </div>

        <div className="space-y-5 text-base leading-8 text-[#536170]">
          <p>
            Located in Faisalabad, Pakistan, En Dee Textiles Industries brings together textile manufacturing and trading expertise with a focus on operational reliability.
          </p>
          <p>
            The business supports textile processing, sourcing coordination, and trade-oriented communication with attention to quality, workflow discipline, and long-term commercial relationships.
          </p>
          <p>
            The brand continues to evolve with a clear emphasis on transparent communication, process discipline, and practical solutions for the modern textile sector.
          </p>
        </div>
      </div>

      <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            icon: Building2,
            title: "Mission",
            text: "To build dependable textile operations that align manufacturing discipline with commercial clarity.",
          },
          {
            icon: Target,
            title: "Vision",
            text: "To support trusted relationships through consistent quality, practical processes, and export-ready readiness.",
          },
          {
            icon: HeartHandshake,
            title: "Philosophy",
            text: "To work with honesty, consistency, and a long-term understanding of the textile value chain.",
          },
          {
            icon: Users,
            title: "Management",
            text: `Led by General Manager ${company.manager}, with a focus on steady operations and business coordination.`,
          },
        ].map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-[1.8rem] border border-[#e5e9ed] bg-[#f5f7f9] p-6">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#f0d343] text-[#172b3d]">
              <Icon size={18} />
            </div>
            <h3 className="text-2xl font-semibold text-[#172b3d]">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-[#65717d]">{text}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
