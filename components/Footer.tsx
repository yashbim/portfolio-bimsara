import { NAV_LINKS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-white/5">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-sm text-gray-300 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} Bimsara Madurapperuma. All rights
          reserved.
        </p>
        <div className="flex items-center gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-white">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
