import Image from "next/image";

export function BrandLogo({ compact = false, priority = false }: { compact?: boolean; priority?: boolean }) {
  return (
    <span className="inline-flex min-w-0 items-center gap-2.5" translate="no">
      <Image
        src="/images/consflow-light-mark.png"
        alt=""
        width={36}
        height={36}
        sizes="36px"
        className="brand-mark h-9 w-9 shrink-0 object-contain"
        priority={priority}
      />
      <span className="min-w-0">
        <span className="block text-[1.05rem] font-extrabold leading-none tracking-[-0.025em] text-ink">ConsFlow</span>
        {compact ? null : <span className="mt-1 block text-[0.68rem] font-semibold leading-none text-steel">Operación para consorcios</span>}
      </span>
    </span>
  );
}
