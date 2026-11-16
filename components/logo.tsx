import Link from "next/link";

export function Logo({ compact = false, light = false }: { compact?: boolean; light?: boolean }) {
  return (
    <Link href="/" className="inline-flex items-end gap-3 transition-transform hover:scale-[1.01]" aria-label="En Dee Textiles Industries home">
      <div className="relative h-11 w-12 shrink-0 md:h-14 md:w-16">
        <span className="absolute inset-y-1/3 left-0 w-10 rounded-r-[18px] bg-[#d72a2a] md:w-12" style={{ transform: "skewX(-28deg)" }} />
        <span className="absolute bottom-0 left-2 h-7 w-10 rounded-r-[18px] bg-[#b4b4b4] opacity-90 md:h-9 md:w-12" style={{ transform: "skewX(-28deg)" }} />
      </div>

      <div className="leading-none">
        <div className="flex items-end">
          <span className={`font-black tracking-[-0.06em] ${light ? "text-white" : "text-[#172b3d]"} ${compact ? "text-3xl md:text-4xl" : "text-4xl md:text-6xl"}`}>
            En Dee
          </span>
        </div>
        <span className={`mt-1 block text-[0.58rem] font-medium uppercase tracking-[0.32em] md:text-[0.7rem] ${light ? "text-[#cbd4dc]" : "text-[#536170]"}`}>
          Textile Industries
        </span>
      </div>
    </Link>
  );
}
