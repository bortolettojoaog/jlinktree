import Image from "next/image";

export function Avatar({ name }: { name: string }) {
  return (
    <div className="relative h-24 w-24 overflow-hidden rounded-full border border-white/15 shadow-[0_0_0_1px_rgba(255,255,255,0.05),0_20px_40px_-15px_rgba(0,0,0,0.6)] sm:h-28 sm:w-28">
      <Image
        src="/avatar.jpg"
        alt={name}
        fill
        sizes="112px"
        className="object-cover"
        style={{ objectPosition: "50% 22%" }}
        priority
      />
    </div>
  );
}
