import Link from "next/link";
import Image from "next/image";
import {
  ArrowDownRight,
  ArrowRight,
  BadgeCheck,
  Boxes,
  Factory,
  Globe2,
  Layers3,
  MoveUpRight,
  Scissors,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { manufacturingSteps, productCatalog } from "@/lib/site-data";

const capabilities = [
  {
    icon: Layers3,
    title: "Textile manufacturing",
    description: "Thoughtful production planning shaped around each buyer's brief and the requirements of the end use.",
  },
  {
    icon: Scissors,
    title: "Processing & finishing",
    description: "Coordinated processing support, with attention to the details that influence fabric quality and finish.",
  },
  {
    icon: Boxes,
    title: "Sourcing & trade",
    description: "Practical sourcing and commercial coordination for textile requirements across markets.",
  },
];

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#f7f8fa]">
        <div className="pointer-events-none absolute -right-36 -top-32 h-[32rem] w-[32rem] rounded-full bg-[#f4d94f]/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 pb-16 pt-12 md:px-8 md:pb-24 md:pt-16 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:gap-16 lg:py-20">
          <div className="relative z-10">
            <p className="mb-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-[#24394d]">
              <span className="h-2 w-2 rounded-full bg-[#e6c52d]" />
              En Dee Textiles Industries · Faisalabad, Pakistan
            </p>
            <h1 className="max-w-2xl text-[2.85rem] font-semibold leading-[1.04] tracking-[-0.065em] text-[#172b3d] sm:text-6xl lg:text-[4.35rem]">
              Made with purpose.
              <span className="mt-1 block text-[#e2bd22]">Built for what’s next.</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-[#586574] md:text-lg">
              A textile manufacturing and trading company bringing production, processing, and sourcing together with a practical, quality-led approach.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-3 rounded-full bg-[#e8c92f] px-6 py-3.5 text-sm font-bold text-[#172b3d] transition hover:bg-[#f1d951]"
              >
                Discuss your requirement <ArrowRight size={16} />
              </Link>
              <Link
                href="/capabilities"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#cbd3da] bg-white/70 px-6 py-3.5 text-sm font-semibold text-[#24394d] transition hover:border-[#24394d]"
              >
                Explore capabilities
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 border-t border-[#dce1e6] pt-5 text-sm text-[#526170]">
              <span className="inline-flex items-center gap-2"><Factory size={16} className="text-[#d3b21e]" /> Manufacturing</span>
              <span className="inline-flex items-center gap-2"><BadgeCheck size={16} className="text-[#d3b21e]" /> Quality focus</span>
              <span className="inline-flex items-center gap-2"><Globe2 size={16} className="text-[#d3b21e]" /> Textile trade</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-2xl lg:mr-0">
            <div className="absolute -left-5 top-12 z-10 hidden h-24 w-24 rounded-full border border-[#e5c536]/70 sm:block" />
            <div className="relative overflow-hidden rounded-[1.8rem] bg-[#24394d] shadow-[0_30px_80px_rgba(23,43,61,0.2)]">
              <Image
                src="https://images.unsplash.com/photo-1581091212991-8891c7d4bd9b?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
                alt="Textile production team operating fabric equipment"
                width={1500}
                height={1100}
                priority
                className="h-[390px] w-full object-cover sm:h-[500px] lg:h-[550px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#101f2d]/75 via-transparent to-[#101f2d]/5" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-5 p-6 text-white sm:p-8">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#f3d54e]">From fabric to finished goods</p>
                  <p className="mt-2 max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] sm:text-3xl">
                    Textile expertise, with a human touch.
                  </p>
                </div>
                <Link
                  href="/products"
                  aria-label="Explore products"
                  className="mb-1 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#f0d343] text-[#172b3d] transition hover:scale-105"
                >
                  <MoveUpRight size={20} />
                </Link>
              </div>
            </div>
            <div className="absolute -bottom-5 right-5 hidden items-center gap-3 rounded-2xl border border-[#e6e9ec] bg-white px-5 py-4 shadow-xl sm:flex">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f8f2d5] text-[#24394d]"><Sparkles size={18} /></span>
              <div>
                <p className="text-sm font-bold text-[#172b3d]">A considered approach</p>
                <p className="mt-0.5 text-xs text-[#687583]">Quality · coordination · care</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e8ebee] bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-8 md:py-9">
          {[
            ["01", "Manufacturing"],
            ["02", "Processing"],
            ["03", "Sourcing"],
            ["04", "Trade coordination"],
          ].map(([number, label]) => (
            <div key={number} className="flex items-center gap-3">
              <span className="text-xs font-bold tracking-[0.12em] text-[#d3b21e]">{number}</span>
              <span className="text-sm font-semibold text-[#24394d]">{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20 md:py-28">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 md:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-20">
          <div className="relative">
            <div className="grid grid-cols-[1.1fr_0.9fr] items-end gap-4">
              <Image
                src="https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&w=900&q=85"
                alt="Textile materials arranged for production"
                width={900}
                height={1100}
                className="h-[330px] w-full rounded-2xl object-cover sm:h-[430px]"
              />
              <div className="space-y-4 pb-8">
                <Image
                  src="https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=800&q=85"
                  alt="Garments displayed in a textile retail setting"
                  width={800}
                  height={520}
                  className="h-40 w-full rounded-2xl object-cover sm:h-52"
                />
                <div className="rounded-2xl bg-[#f2d74e] p-5 text-[#172b3d] sm:p-6">
                  <p className="text-3xl font-semibold tracking-[-0.05em]">Faisalabad</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.15em]">Pakistan’s textile hub</p>
                </div>
              </div>
            </div>
            <div className="absolute -left-3 -top-4 -z-0 h-20 w-20 rounded-tl-[2rem] border-l-2 border-t-2 border-[#e4c331]" />
          </div>

          <div>
            <SectionHeading
              eyebrow="About En Dee"
              title="Where textile know-how meets thoughtful execution."
              description="Based in Faisalabad, En Dee Textiles Industries works across textile manufacturing and trading. We bring practical production understanding together with processing and sourcing coordination—keeping the focus on clear communication and consistent work."
            />
            <div className="mt-8 flex flex-col gap-4 border-t border-[#e5e9ec] pt-6 sm:flex-row sm:items-center sm:justify-between">
              <p className="max-w-sm text-sm leading-7 text-[#65717d]">
                Built around real textile operations, shaped by the needs of each business relationship.
              </p>
              <Link href="/about" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#24394d] hover:text-[#b69a17]">
                Get to know us <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#f5f7f9] py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="What we do"
              title="Textile solutions, connected end to end."
              description="A flexible set of capabilities to support the flow from material needs to commercial delivery."
            />
            <Link href="/capabilities" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#24394d] hover:text-[#b69a17]">
              See all capabilities <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-11 grid gap-5 md:grid-cols-3">
            {capabilities.map(({ icon: Icon, title, description }, index) => (
              <article key={title} className="group relative overflow-hidden rounded-2xl border border-[#e5e9ed] bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(23,43,61,0.09)]">
                <div className="flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#f7f1cf] text-[#24394d]">
                    <Icon size={21} strokeWidth={1.8} />
                  </span>
                  <span className="text-sm font-bold tracking-[0.12em] text-[#c7b34a]">0{index + 1}</span>
                </div>
                <h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-[#172b3d]">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-[#65717d]">{description}</p>
                <Link href="/capabilities" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#24394d]">
                  Learn more <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" />
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected products"
              title="Made to meet the brief."
              description="Explore the product and service areas En Dee is structured to support. Specific compositions and specifications can be confirmed for each inquiry."
            />
            <Link href="/products" className="inline-flex shrink-0 items-center gap-2 text-sm font-bold text-[#24394d] hover:text-[#b69a17]">
              View product range <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-11 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {productCatalog.map((product) => (
              <Link key={product.slug} href={`/products/${product.slug}`} className="group overflow-hidden rounded-2xl border border-[#e7eaed] bg-white">
                <div className="relative overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={800}
                    height={600}
                    className="h-56 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-[#24394d]">
                    {product.category}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <h3 className="text-lg font-semibold leading-tight tracking-[-0.02em] text-[#172b3d]">{product.name}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#dce1e5] text-[#24394d] transition group-hover:border-[#e6c52d] group-hover:bg-[#e6c52d]">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#172b3d] py-20 text-white md:py-24">
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <Image
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1400&q=85"
            alt="Textile production equipment"
            width={1400}
            height={1000}
            className="h-full w-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#172b3d] via-[#172b3d]/70 to-[#172b3d]/20" />
        </div>
        <div className="relative mx-auto grid max-w-7xl gap-12 px-5 md:px-8 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-[#f0d343]">A considered process</p>
            <h2 className="max-w-2xl text-3xl font-semibold leading-tight tracking-[-0.05em] text-white md:text-5xl">
              Every detail matters in making textiles work better.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-8 text-[#d1d9e0]">
              From material intake and processing through quality oversight and trade coordination, our approach is built around clear requirements and careful execution.
            </p>
            <Link href="/capabilities" className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#f0d343] px-6 py-3.5 text-sm font-bold text-[#172b3d] transition hover:bg-[#f7e679]">
              Discover our process <ArrowRight size={16} />
            </Link>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
            {manufacturingSteps.slice(0, 4).map((step) => (
              <div key={step.step} className="flex items-start gap-4 border-b border-white/15 py-4">
                <span className="pt-1 text-xs font-bold tracking-[0.16em] text-[#f0d343]">{step.step}</span>
                <div>
                  <h3 className="text-base font-semibold text-white">{step.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-[#c3cdd5]">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f2d74e] py-14 md:py-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 px-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#5b4b08]">Let’s work together</p>
            <h2 className="mt-2 max-w-2xl text-3xl font-semibold tracking-[-0.05em] text-[#172b3d] md:text-4xl">
              Have a textile requirement in mind?
            </h2>
            <p className="mt-2 text-sm leading-6 text-[#4c4c43]">
              Tell us what you’re looking for and start a conversation with our team.
            </p>
          </div>
          <Link href="/contact" className="inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#172b3d] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#263f56]">
            Contact En Dee <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </main>
  );
}
