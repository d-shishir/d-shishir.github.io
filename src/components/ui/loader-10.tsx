import * as React from "react";

import { cn } from "@/lib/utils";

export interface GooeyLoaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Primary color for the goo effect. Defaults to theme --primary (HSL components). */
  primaryColor?: string;
  /** Secondary color for the goo effect. Defaults to theme --secondary. */
  secondaryColor?: string;
  /** Bottom border color. Defaults to theme --border. */
  borderColor?: string;
}

const GooeyLoader = React.forwardRef<HTMLDivElement, GooeyLoaderProps>(
  ({ className, primaryColor, secondaryColor, borderColor, ...props }, ref) => {
    const uid = React.useId().replace(/:/g, "");
    const filterId = `gooey-loader-filter-${uid}`;
    const loaderClass = `gooey-loader-el-${uid}`;

    const style = {
      "--gooey-primary-color": primaryColor ?? "hsl(var(--primary))",
      "--gooey-secondary-color": secondaryColor ?? "hsl(var(--secondary))",
      "--gooey-border-color": borderColor ?? "hsl(var(--border))",
    } as React.CSSProperties;

    return (
      <div
        ref={ref}
        className={cn("relative flex items-center justify-center text-sm", className)}
        style={style}
        role="status"
        aria-label="Loading"
        {...props}
      >
        <svg className="absolute h-0 w-0" aria-hidden>
          <defs>
            <filter id={filterId}>
              <feGaussianBlur in="SourceGraphic" stdDeviation={12} result="blur" />
              <feColorMatrix
                in="blur"
                mode="matrix"
                values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 48 -7"
                result="goo"
              />
              <feComposite in="SourceGraphic" in2="goo" operator="atop" />
            </filter>
          </defs>
        </svg>

        <style>
          {`
            .${loaderClass} {
              width: 12em;
              height: 3em;
              position: relative;
              overflow: hidden;
              border-bottom: 8px solid var(--gooey-border-color);
              filter: url(#${filterId});
            }

            .${loaderClass}::before,
            .${loaderClass}::after {
              content: '';
              position: absolute;
              border-radius: 50%;
            }

            .${loaderClass}::before {
              width: 22em;
              height: 18em;
              background-color: var(--gooey-primary-color);
              left: -2em;
              bottom: -18em;
              animation: gooey-loader-wee1-${uid} 2s linear infinite;
            }

            .${loaderClass}::after {
              width: 16em;
              height: 12em;
              background-color: var(--gooey-secondary-color);
              left: -4em;
              bottom: -12em;
              animation: gooey-loader-wee2-${uid} 2s linear infinite 0.75s;
            }

            @keyframes gooey-loader-wee1-${uid} {
              0% { transform: translateX(-10em) rotate(0deg); }
              100% { transform: translateX(7em) rotate(180deg); }
            }

            @keyframes gooey-loader-wee2-${uid} {
              0% { transform: translateX(-8em) rotate(0deg); }
              100% { transform: translateX(8em) rotate(180deg); }
            }
          `}
        </style>

        <div className={loaderClass} />
      </div>
    );
  },
);
GooeyLoader.displayName = "GooeyLoader";

export { GooeyLoader };
