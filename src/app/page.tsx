import { Avatar } from "@/components/Avatar";
import { LinkSection } from "@/components/LinkSection";
import { linkGroups, profile } from "@/config/links";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url(/assets/images/background.webp)" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/85 to-black" />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-md flex-col items-center gap-10 px-6 py-16 sm:py-20">
        <div className="flex w-full flex-col items-center gap-4 text-center">
          <Avatar name={profile.name} />
          <div className="w-full">
            <h1 className="font-heading text-xl tracking-[0.1em] text-neutral-50 sm:text-2xl">
              {profile.name}
            </h1>
            <p className="mt-2 font-body text-sm text-neutral-400">{profile.tagline}</p>
          </div>
        </div>

        <div className="flex w-full flex-col gap-8">
          {linkGroups.map((group) => (
            <LinkSection key={group.id} group={group} />
          ))}
        </div>

        <footer className="mt-auto pt-6 text-center font-body text-xs text-neutral-600">
          &copy; {new Date().getFullYear()} BortolettoTech
        </footer>
      </div>
    </main>
  );
}
