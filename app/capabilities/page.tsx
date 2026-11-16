import { Factory, Gauge, ShieldCheck, Workflow } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { processCapabilities, qualityStandards } from "@/lib/site-data";

export const metadata = {
  title: "Manufacturing & Capabilities",
  description: "Learn about the textile manufacturing, processing, and quality-driven capabilities of En Dee Textiles Industries.",
};

export default function CapabilitiesPage() {
  const cards = [
    { icon: Factory, title: "Manufacturing overview", text: "Operational systems are designed to support efficient workflow planning, high-value textile production, and practical business execution." },
    { icon: Workflow, title: "Processing operations", text: "The business supports textile processing steps with a strong focus on consistency, workflow coordination, and quality alignment." },
    { icon: Gauge, title: "Production workflow", text: "From intake to dispatch, each stage is structured around organized handling and dependable communication." },
    { icon: ShieldCheck, title: "Quality assurance", text: "Quality oversight remains a central operational principle, supporting confidence across production and commercial activities." },
  ];

  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionHeading
        eyebrow="Manufacturing & capabilities"
        title="Operational strength built around textile expertise and disciplined workflows."
        description="En Dee Textiles Industries combines manufacturing, processing, and trading functions into a commercially aware business model that supports practical quality standards and responsive communication."
      />

      <div className="mt-14 grid gap-6 md:grid-cols-2">
        {cards.map(({ icon: Icon, title, text }) => (
          <div key={title} className="rounded-[1.8rem] border border-[#e5e9ed] bg-[#f5f7f9] p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#f0d343] text-[#172b3d]">
              <Icon size={18} />
            </div>
            <h3 className="text-2xl font-semibold text-[#172b3d]">{title}</h3>
            <p className="mt-4 text-base leading-8 text-[#65717d]">{text}</p>
          </div>
        ))}
      </div>

      <div className="mt-20 grid gap-8 lg:grid-cols-2">
        <div className="rounded-[2rem] border border-[#e5e9ed] bg-white p-8 shadow-[0_15px_40px_rgba(23,43,61,0.05)]">
          <h3 className="text-3xl font-semibold tracking-[-0.06em] text-[#172b3d]">Core manufacturing strengths</h3>
          <ul className="mt-6 space-y-4 text-base text-[#536170]">
            {processCapabilities.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0d343] text-xs font-bold text-[#172b3d]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-[2rem] border border-[#172b3d] bg-[#172b3d] p-8 text-white shadow-[0_15px_40px_rgba(23,43,61,0.12)]">
          <h3 className="text-3xl font-semibold tracking-[-0.06em] text-white">Quality focus</h3>
          <ul className="mt-6 space-y-4 text-base text-[#e8e2dd]">
            {qualityStandards.map((item) => (
              <li key={item} className="flex items-center gap-3">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#f0d343] text-xs font-bold text-[#172b3d]">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
