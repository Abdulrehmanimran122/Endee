import Link from "next/link";
import { ArrowUpRight, Menu } from "lucide-react";
import { Logo } from "@/components/logo";
import { navItems } from "@/lib/site-data";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e8ebee] bg-white/95 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 md:px-8">
        <Logo compact />

        <nav className="hidden items-center gap-8 text-[0.83rem] font-semibold text-[#536170] lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#172b3d]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-[#e8c92f] px-5 py-3 text-sm font-bold text-[#172b3d] transition hover:bg-[#f1d951]">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>

        <details className="lg:hidden">
          <summary aria-label="Open navigation menu" className="inline-flex cursor-pointer list-none items-center justify-center rounded-full border border-[#d9dfe4] bg-white p-3 text-[#172b3d]">
            <Menu size={20} />
          </summary>
          <div className="absolute left-0 right-0 top-full border-t border-[#e8ebee] bg-white shadow-lg">
            <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-4 md:px-8">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-xl px-4 py-3 text-sm font-semibold text-[#536170] hover:bg-[#f5f7f9] hover:text-[#172b3d]"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="mt-2 rounded-full bg-[#e8c92f] px-4 py-3 text-center text-sm font-bold text-[#172b3d]"
              >
                Start a conversation
              </Link>
            </div>
          </div>
        </details>
      </div>
    </header>
  );
}
