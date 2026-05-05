const stats = [
  { value: "NSF", label: "Award #2503219" },
  { value: "FREE", label: "HPC Access via ORCA" },
  { value: "7+", label: "Oregon Institutions" },
];

const orcaPIs = [
  "Dr. William Pazner, Asst. Professor, Dept. of Mathematics & Statistics, Portland State University (Lead PI)",
  "Greg Anderson, Asst. Professor of Computer Science, Reed College",
  "Steve Corbató, (former) Executive Director, Link Oregon",
  "Josef Dufek, Professor and Chair of Earth Sciences, University of Oregon",
  "Mark Keever, Executive Director of Digital Research Infrastructure, Oregon State University",
];

const ciaoPIs = [
  "Christy Long, Associate CIO for Technology Infrastructure, University of Oregon (Lead PI)",
  "Steve Corbató, (former) Executive Director, Link Oregon",
  "David Barber, Director of Strategy for Research Computing, Oregon State University",
  "Will Pazner, Asst. Professor of Mathematics and Statistics, Portland State University",
];

export function Hero() {
  return (
    <div className="w-full font-sans">

      {/* ── Hero Banner ─────────────────────────────────────────── */}
      <section className="relative bg-[#0b3d2e] overflow-hidden">
        {/* subtle grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-5xl mx-auto px-6 py-20 md:py-28">
          {/* eyebrow */}
          <p className="text-[#6ee7a8] text-xs font-semibold tracking-widest uppercase mb-4">
            NSF CC* Strategy-Region · Award #2503219
          </p>

          <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight max-w-3xl mb-6">
            A Statewide Model to Advance{" "}
            <span className="text-[#6ee7a8]">Research Computing</span> Initiatives
          </h1>

          <p className="text-gray-300 text-lg leading-relaxed max-w-2xl mb-10">
            <strong className="text-white">CIAO — Cyberinfrastructure Alliance for Oregon</strong> is a
            statewide community of practice focused on strategic research computing and technology
            infrastructure collaboration across Oregon's higher education institutions, supported by
            an NSF planning grant.
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.linkoregon.org/wp-content/uploads/2025/11/CIAO-overview-NSF-2503219.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#6ee7a8] text-[#0b3d2e] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#4dd48e] transition-colors"
            >
              Learn More ↗
            </a>
            <a
              href="mailto:longch@uoregon.edu"
              className="inline-flex items-center gap-2 border border-[#6ee7a8] text-[#6ee7a8] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#6ee7a8]/10 transition-colors"
            >
              Contact CIAO
            </a>
          </div>

          {/* stat pills */}
          <div className="flex flex-wrap gap-6 mt-12 pt-10 border-t border-white/10">
            {stats.map(({ value, label }) => (
              <div key={label}>
                <p className="text-[#6ee7a8] text-2xl font-bold">{value}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission ─────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-gray-950 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0b3d2e] dark:text-[#6ee7a8] mb-3">
            Our Mission
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-6 max-w-2xl leading-snug">
            Expanding access, removing barriers, strengthening Oregon's tech talent pipeline
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl">
            CIAO works to expand higher education institutional engagement by reducing barriers to
            cyberinfrastructure resource sharing, enhancing the productivity and impact of
            NSF-funded research, and increasing access to STEM and AI training — especially at
            smaller colleges — to strengthen Oregon's technology talent pipeline.
          </p>
        </div>
      </section>

      {/* ── Accelerating Innovation ──────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0b3d2e] dark:text-[#6ee7a8] mb-3">
            Oregon's Public Universities
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-6 leading-snug">
            Accelerating Scientific Innovation and Discovery
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed max-w-3xl">
            From improving ocean health and climate resilience through plankton research to
            pioneering precision cancer treatments and next-generation electron microscopy, Oregon's
            public universities are driving innovations across disciplines. CIAO will accelerate
            this work by removing barriers to shared cyberinfrastructure resources and expanding
            access for smaller, under-resourced institutions. Link Oregon's advanced research and
            education network underpins these efforts, enabling fast, secure data sharing and
            cross-institution collaboration.
          </p>
        </div>
      </section>

      {/* ── ORCA ────────────────────────────────────────────────── */}
      <section className="bg-white dark:bg-gray-950">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* left: ORCA info */}
            <div>
              <span className="inline-block bg-[#0b3d2e] text-[#6ee7a8] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-4">
                NSF CC* #2346732
              </span>
              <h2 className="text-gray-900 dark:text-white text-3xl font-bold mb-4 leading-snug">
                Oregon Regional Computing Accelerator
                <span className="text-[#0b3d2e] dark:text-[#6ee7a8]"> (ORCA)</span>
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed mb-6">
                Funded by the National Science Foundation and hosted at Portland State University,
                ORCA is a new high-performance computing (HPC) cluster that offers{" "}
                <strong className="text-gray-900 dark:text-white">free access</strong> to
                researchers at universities and colleges all across Oregon — giving them the ability
                to advance compute-intensive research projects.
              </p>
              <a
                href="https://orca.pdx.edu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-[#0b3d2e] text-[#6ee7a8] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#0f5240] transition-colors"
              >
                Sign up for free access ↗
              </a>
            </div>

            {/* right: ORCA PIs */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 border border-gray-100 dark:border-gray-800">
              <p className="text-xs font-semibold tracking-widest uppercase text-gray-400 dark:text-gray-500 mb-4">
                ORCA Principal Investigators
              </p>
              <ul className="space-y-3">
                {orcaPIs.map((pi) => (
                  <li key={pi} className="flex gap-3 text-sm text-gray-600 dark:text-gray-300 leading-snug">
                    <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#6ee7a8]" />
                    {pi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── CIAO PIs ────────────────────────────────────────────── */}
      <section className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <p className="text-xs font-semibold tracking-widest uppercase text-[#0b3d2e] dark:text-[#6ee7a8] mb-3">
            CIAO Leadership
          </p>
          <h2 className="text-gray-900 dark:text-white text-2xl font-bold mb-8">
            Principal Investigators
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {ciaoPIs.map((pi) => (
              <div
                key={pi}
                className="bg-white dark:bg-gray-950 rounded-lg border border-gray-100 dark:border-gray-800 px-5 py-4 flex gap-3 items-start"
              >
                <span className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full bg-[#0b3d2e] dark:bg-[#6ee7a8]" />
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">{pi}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Pull Quote ──────────────────────────────────────────── */}
      <section className="bg-[#0b3d2e]">
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <p className="text-[#6ee7a8] text-3xl md:text-4xl font-bold leading-tight mb-4">
            "The best way to have a good idea is to have a lot of ideas."
          </p>
          <p className="text-gray-400 text-sm tracking-wide">
            — Linus Pauling, two-time Nobel Laureate &amp; native Oregonian
          </p>
        </div>
      </section>
    </div>
  );
}
