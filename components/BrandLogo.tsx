import Image from "next/image";

const logoSrc = "/images/consflow-logo.png";

export function BrandLogo({ size = "md", priority = false }: { size?: "sm" | "md" | "lg"; priority?: boolean }) {
  const sizes = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-20 w-20",
  };

  const imageSizes = {
    sm: 40,
    md: 48,
    lg: 80,
  };

  return (
    <span className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${sizes[size]}`}>
      <Image
        src={logoSrc}
        alt="Logo de ConsFlow"
        width={imageSizes[size]}
        height={imageSizes[size]}
        className="h-full w-full object-contain p-1.5"
        priority={priority}
      />
    </span>
  );
}
