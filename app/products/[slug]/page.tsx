import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { productCatalog } from "@/lib/site-data";

export function generateStaticParams() {
  return productCatalog.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Product not found" };
  }

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = productCatalog.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:px-8">
      <Link href="/products" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#172b3d] hover:text-[#b49a1c]">
        <ArrowLeft size={15} /> Back to catalog
      </Link>

      <div className="overflow-hidden rounded-[2rem] border border-[#e5e9ed] bg-white shadow-[0_20px_50px_rgba(23,43,61,0.05)]">
        <div className="grid gap-0 lg:grid-cols-[1.05fr_0.95fr]">
          <Image src={product.image} alt={product.name} width={1200} height={1000} className="h-full min-h-[350px] w-full object-cover" />
          <div className="p-7 md:p-10">
            <p className="text-[0.62rem] font-semibold uppercase tracking-[0.22em] text-[#b49a1c]">{product.category}</p>
            <h1 className="mt-4 text-4xl font-semibold tracking-[-0.06em] text-[#172b3d] md:text-5xl">{product.name}</h1>
            <p className="mt-5 text-base leading-8 text-[#65717d]">{product.description}</p>

            <div className="mt-8 rounded-[1.5rem] bg-[#f5f7f9] p-5">
              <h2 className="text-lg font-semibold text-[#172b3d]">Key highlights</h2>
              <ul className="mt-4 space-y-3 text-sm text-[#536170]">
                {product.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check size={16} className="text-[#1d7d58]" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Link href="/contact" className="mt-8 inline-flex items-center justify-center rounded-full bg-[#e8c92f] px-6 py-3 text-sm font-semibold text-[#172b3d] transition hover:bg-[#f1d951]">
              Request product details
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
