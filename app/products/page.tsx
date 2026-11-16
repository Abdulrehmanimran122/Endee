import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { productCatalog } from "@/lib/site-data";

export const metadata = {
  title: "Products",
  description: "Explore the textile product categories and commercial offerings of En Dee Textiles Industries.",
};

export default function ProductsPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 py-16 md:px-8">
      <SectionHeading
        eyebrow="Products"
        title="A configurable product catalog for a modern textile business."
        description="Each category below is designed to be easily updated with verified materials, finished goods, or trading details as the production and commercial profile evolves."
      />

      <div className="mt-12 grid gap-7 md:grid-cols-2 xl:grid-cols-2">
        {productCatalog.map((product) => (
          <article key={product.slug} className="overflow-hidden rounded-[2rem] border border-[#e5e9ed] bg-white shadow-[0_12px_35px_rgba(23,43,61,0.05)]">
            <div className="overflow-hidden">
              <Image src={product.image} alt={product.name} width={1200} height={800} className="h-72 w-full object-cover transition duration-500 hover:scale-105" />
            </div>
            <div className="p-7">
              <p className="text-[0.62rem] font-semibold uppercase tracking-[0.2em] text-[#b49a1c]">{product.category}</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em] text-[#172b3d]">{product.name}</h2>
              <p className="mt-4 text-base leading-7 text-[#65717d]">{product.description}</p>
              <ul className="mt-5 space-y-2 text-sm text-[#536170]">
                {product.features.map((feature) => (
                  <li key={feature}>• {feature}</li>
                ))}
              </ul>
              <Link href={`/products/${product.slug}`} className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#172b3d] px-5 py-2.5 text-sm font-semibold text-[#172b3d] transition hover:bg-[#172b3d] hover:text-white">
                View Product <ArrowRight size={15} />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
