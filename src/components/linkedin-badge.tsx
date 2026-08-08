const LINKEDIN_PROFILES: Record<string, string> = {
  "Asad Farooq": "https://www.linkedin.com/in/designerasad/",
  "Usama Farooq": "https://www.linkedin.com/in/osama-farooq-manj/",
};

export function getLinkedInUrl(name: string): string | undefined {
  return LINKEDIN_PROFILES[name];
}

/**
 * Small premium LinkedIn icon link shown beside a team member's name.
 * Neutral by default, LinkedIn brand blue on hover, with a subtle tooltip.
 */
export function LinkedInBadge({ name, url }: { name: string; url: string }) {
  return (
    <span className="group/li relative inline-flex shrink-0 items-center align-middle">
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        draggable={false}
        onClick={(e) => e.stopPropagation()}
        aria-label={`View ${name}'s LinkedIn profile`}
        className="inline-flex h-[18px] w-[18px] items-center justify-center rounded-[4px] text-muted-foreground transition-all duration-300 hover:scale-110 hover:text-[#0A66C2] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] focus-visible:ring-offset-2 focus-visible:ring-offset-background"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
          className="h-[17px] w-[17px]"
        >
          <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.55V9h3.57v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.73V1.72C24 .77 23.2 0 22.22 0z" />
        </svg>
      </a>
      <span
        role="tooltip"
        className="pointer-events-none absolute bottom-[calc(100%+6px)] left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-md bg-foreground px-2 py-1 text-[10px] font-medium text-background opacity-0 shadow-lg transition-opacity duration-200 group-hover/li:opacity-100"
      >
        View LinkedIn Profile
      </span>
    </span>
  );
}
