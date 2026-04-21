type ServiceCardProps = {
  title: string;
  description: string;
  img: string;
  price?: string; // <--- 1. Add optional price prop
  width?: "sm" | "md" | "lg" | "full";
};

const widthClass: Record<NonNullable<ServiceCardProps["width"]>, string> = {
  sm: "md:col-span-1",
  md: "md:col-span-2",
  lg: "md:col-span-3",
  full: "md:col-span-4",
};

export default function ServiceCard({
  title,
  description,
  img,
  price, // <--- 2. Destructure it
  width = "md",
}: ServiceCardProps) {
  return (
    <div className={["group relative h-[260px] overflow-hidden rounded-2xl bg-neutral-900/5", widthClass[width]].join(" ")}>
      <img src={img} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 transition group-hover:opacity-50" />

      <div className="relative z-10 flex h-full flex-col justify-end p-6">
        <div>
          <h3 className="text-2xl font-semibold text-black dark:text-white">{title}</h3>
          {price && <p className="mt-1 text-sm font-bold text-[#2cff68]">{price}</p>}
        </div>
        <p className="mt-3 text-sm text-neutral-700 dark:text-white/60">{description}</p>
      </div>
    </div>
  );
}