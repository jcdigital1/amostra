import React from "react";

interface InstagramIconOfficialProps {
  size?: number;
  className?: string;
}

/**
 * Official vector Instagram icon with guaranteed 1:1 aspect ratio and zero distortion.
 * Pure official path (viewBox="0 0 24 24").
 */
export const InstagramIconOfficial: React.FC<InstagramIconOfficialProps> = ({
  size = 24,
  className = "",
}) => {
  return (
    <div
      className={`inline-flex items-center justify-center shrink-0 ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        minHeight: size,
        aspectRatio: "1 / 1",
      }}
    >
      <svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
          aspectRatio: "1 / 1",
          flexShrink: 0,
          display: "block",
        }}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    </div>
  );
};
