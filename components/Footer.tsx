import { NAV_LINKS } from "@/constants/navigation";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-static">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-6 text-sm text-gray-300 sm:flex-row sm:px-6">
        <p>
          © {new Date().getFullYear()} Bimsara Madurapperuma. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
