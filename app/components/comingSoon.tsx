import { NavLink } from "react-router";

interface ComingSoonProps {
  page: string;
}

export function ComingSoon({ page }: ComingSoonProps) {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="inline-flex items-center gap-2 bg-[#0b3d2e] text-[#6ee7a8] text-xs font-semibold tracking-widest uppercase px-3 py-1 rounded-full mb-6">
          Coming Soon
        </div>
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {page}
        </h1>
        <p className="text-gray-500 dark:text-gray-400 text-base leading-relaxed mb-8">
          This page is currently under construction. Check back soon for updates from the CIAO team.
        </p>
        <NavLink
          to="/"
          className="inline-flex items-center gap-2 bg-[#0b3d2e] text-[#6ee7a8] font-semibold text-sm px-5 py-2.5 rounded-lg hover:bg-[#0f5240] transition-colors"
        >
          ← Back to Home
        </NavLink>
      </div>
    </main>
  );
}
