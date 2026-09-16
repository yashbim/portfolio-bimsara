"use client";

import Image from "next/image";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function Blogs() {
  return (
    <section id="blogs" className="mx-auto max-w-7xl px-4 py-16 sm:px-6">
      <div className="reveal">
        <h2 className="text-4xl font-semibold">Blogs</h2>

        <div className="mt-6 rounded-xl border border-white/10 bg-static divide-y divide-white/10">
          {/* Blog Preview Card */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-64 h-40 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/blog_thumbnail_1.png"
                alt="Oracle Free VPS Blog"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  The Impossible Free VPS — How to Get Oracle’s 24GB RAM Monster Without Paying a Dime
                </h3>
                <p className="mt-2 text-gray-300">
                A complete guide on how to legitimately obtain Oracle&rsquo;s surprisingly powerful free-tier ARM instance with 24GB RAM, including setup steps, troubleshooting, and activation tips.
                </p>

              </div>

              <div className="mt-4">
                <a
                  href="https://medium.com/@ybimsara03/the-impossible-free-vps-how-to-get-oracles-24gb-ram-monster-without-paying-a-dime-47fb4fb9536e"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition text-lg"
                >
                  Read full article →
                </a>
              </div>
            </div>
          </div>

          {/* Blog Preview Card */}
          <div className="p-5 sm:p-6 flex flex-col sm:flex-row gap-6">
            {/* Thumbnail */}
            <div className="relative w-full sm:w-64 h-40 sm:h-40 flex-shrink-0 rounded-lg overflow-hidden border border-white/10">
              <Image
                src="/blog_thumbnail_2.jpeg"
                alt="Sarcastic AI Research Project Blog"
                fill
                className="object-cover"
              />
            </div>

            {/* Content */}
            <div className="flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-semibold">
                  How a Sarcastic AI That I Tried For Fun Actually Saved My Research Project
                </h3>
                <p className="mt-2 text-gray-300">
                What started as a bit of fun with a snarky AI turned into an unexpected lifeline for my research project &mdash; here&rsquo;s how it happened.
                </p>

              </div>

              <div className="mt-4">
                <a
                  href="https://medium.com/@ybimsara03/how-a-sarcastic-ai-that-i-tried-for-fun-actually-saved-my-research-project-b6728bf2f0bb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition text-lg"
                >
                  Read full article →
                </a>
              </div>
            </div>
          </div>

          {/* View on Medium Button */}
          <div className="p-6 flex justify-center">
            <a
              href="https://medium.com/@ybimsara03"
              target="_blank"
              rel="noopener noreferrer"
              className={`rounded-lg border border-white/20 px-6 py-2 text-lg transition hover:bg-white/10 ${raleway.className}`}
            >
              View on Medium
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
