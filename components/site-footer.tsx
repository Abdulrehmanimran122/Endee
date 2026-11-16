import Link from "next/link";
import { ArrowUpRight, MapPin, Phone, Mail } from "lucide-react";
import { company, navItems } from "@/lib/site-data";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#172b3d] text-white">
      <div className="mx-auto max-w-7xl px-5 py-16 md:px-8">
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div className="space-y-6">
            <Logo compact light />
            <p className="max-w-md text-sm leading-7 text-[#d9d5cf]">
              En Dee Textiles Industries builds confidence through textile manufacturing, processing, and trading operations rooted in dependable commercial coordination.
            </p>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d343]">Quick links</h3>
            <ul className="space-y-3 text-sm text-[#d9e0e6]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="inline-flex items-center gap-2 hover:text-[#f0d343]">
                    <ArrowUpRight size={14} />
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-[0.18em] text-[#f0d343]">Contact</h3>
            <ul className="space-y-4 text-sm text-[#d9e0e6]">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-1 text-[#f0d343]" />
                <span>{company.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="text-[#f0d343]" />
                <span>{company.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="text-[#f0d343]" />
                <span>{company.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-[#d9d5cf] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} {company.name}. All rights reserved.</p>
          <p>General Manager: {company.manager}</p>
        </div>
      </div>
    </footer>
  );
}
