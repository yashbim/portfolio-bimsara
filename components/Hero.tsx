import Image from "next/image";

export default function Hero() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:pt-28">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div className="reveal">
          <p className="text-sm uppercase tracking-widest text-[#00BFA6]">
            Software Engineer & Business Analyst
          </p>
          <h1 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
            Hi, I'm <span className="text-[#00BFA6]">Bimsara</span>. I build
            reliable software and shape strategy with data.
          </h1>
          <p className="mt-4 max-w-prose text-gray-200">
            I bridge engineering and business to deliver products that are
            scalable, user-centric, and outcome-driven.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <a
              href="/Bimsara_Madurapperuma_CV.pdf"
              className="inline-flex items-center gap-2 rounded-md bg-[#00BFA6] px-4 py-2 font-medium text-[#0D1B2A] shadow-lg shadow-[#00BFA6]/30 hover:translate-y-[-1px] hover:shadow-xl hover:shadow-[#00BFA6]/40 active:translate-y-0"
              download
            >
              Download CV
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M12 3v12m0 0l-4-4m4 4l4-4M5 21h14"
                  stroke="#0D1B2A"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            {/* <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-md border border-white/15 px-4 py-2 text-white hover:bg-white/5"
            >
              See Projects
            </a> */}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md reveal">
          <div className="aspect-square w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5">
            <div className="flex h-full items-center justify-center">
              <Image
                src="/portraits/5.png"
                alt="Tech illustration"
                width={512}
                height={512}
                className=" opacity-70"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
