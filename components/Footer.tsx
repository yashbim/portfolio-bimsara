export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-8 text-sm text-subtle sm:flex-row sm:items-center sm:justify-between sm:px-8">
        <p>© {new Date().getFullYear()} Bimsara Madurapperuma</p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </div>
    </footer>
  );
}
