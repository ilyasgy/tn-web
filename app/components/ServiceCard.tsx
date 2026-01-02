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
    <div
      className={[
        "group relative h-[260px] overflow-hidden rounded-3xl",
        "border border-white/10",
        "transition hover:border-white/20",
        widthClass[width],
      ].join(" ")}
    >
      {/* Background image */}
      <img
        src={img}
        alt=""
        className="absolute inset-0 h-full w-full object-cover scale-105 blur-[1px] opacity-60 transition group-hover:scale-110"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-end p-7">
        <div className="flex justify-between items-end gap-4">
          <div>
            <h3 className="text-3xl font-extrabold">{title}</h3>
            {price && (
              <p className="mt-1 text-sm font-bold text-[#2cff68] tracking-wide">
                {price}
              </p>
            )}
          </div>
        </div>
        <p className="mt-2 max-w-md text-sm text-white/70">
          {description}
        </p>
      </div>
    </div>
  );
}