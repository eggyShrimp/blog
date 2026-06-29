import { ReactNode } from "react";

export type ShareCardChannel = "github" | "npm" | "website";

export type ShareCardProps = {
  channel: ShareCardChannel;
  title: string;
  description: string;
  url: string;
  meta?: string;
};

function channelIcon(channel: ShareCardChannel): ReactNode {
  const size = 18;
  switch (channel) {
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
      );
    case "npm":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
          <path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" />
        </svg>
      );
    case "website":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      );
  }
}

function channelDomain(channel: ShareCardChannel): string {
  switch (channel) {
    case "github":
      return "github.com";
    case "npm":
      return "npmjs.com";
    case "website":
      return "";
  }
}

export default function ShareCard({
  channel,
  title,
  description,
  url,
  meta,
}: ShareCardProps) {
  const domain = channelDomain(channel);

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block no-underline border p-4 my-5 group"
      style={{
        borderColor: "var(--color-line)",
        backgroundColor: "var(--color-paper)",
        color: "var(--color-ink)",
      }}
    >
      <div className="flex items-center gap-2.5 mb-1.5">
        <span className="leading-none flex-shrink-0" style={{ color: "var(--color-accent)" }}>
          {channelIcon(channel)}
        </span>
        <span className="font-courier text-sm font-bold truncate" style={{ color: "var(--color-ink)" }}>
          {title}
        </span>
        {meta && (
          <span
            className="font-courier text-[10px] px-1.5 py-px rounded-full flex-shrink-0 ml-auto"
            style={{
              color: "var(--color-muted)",
              border: `1px solid var(--color-line)`,
            }}
          >
            {meta}
          </span>
        )}
      </div>
      <p
        className="font-courier text-xs m-0 mb-1.5 leading-relaxed"
        style={{ color: "var(--color-muted)" }}
      >
        {description}
      </p>
      <div className="flex items-center gap-1.5">
        <span
          className="font-courier text-[11px] truncate"
          style={{ color: "var(--color-muted)" }}
        >
          {domain ? `${domain}${url.replace(/^https?:\/\/[^/]+/, "")}` : url}
        </span>
        <span
          className="font-courier text-xs opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0"
          style={{ color: "var(--color-accent)" }}
        >
          →
        </span>
      </div>
    </a>
  );
}
