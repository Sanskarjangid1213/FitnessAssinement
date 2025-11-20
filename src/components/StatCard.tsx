import * as React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
  variant?: "cyan" | "orange" | "purple";
}

type Variant = NonNullable<StatCardProps["variant"]>;

const VARIANT_STYLES: Record<
  Variant,
  {
    card: string;
    icon: string;
    text: string;
    waveFrom: string;
    waveTo: string;
    stroke: string;
    area: boolean;
  }
> = {
  cyan: {
    card: "bg-[hsla(189,94%,43%,1)]",
    icon: "bg-[#009FE8]/70",
    text: "text-white",
    waveFrom: "hsla(189, 94%, 43%, 0.4)",
    waveTo: "hsla(189, 94%, 43%, 0.2)",
    stroke: "hsla(189, 94%, 37%, 2)",
    area: true,
  },
  orange: {
    card: "bg-[hsla(25,95%,53%,1)]",
    icon: "bg-[#FF7300]/75",
    text: "text-white",
    waveFrom: "hsla(25, 95%, 50%, 0.30)",
    waveTo: "hsla(25, 95%, 50%, 0.20)",
    stroke: "hsla(25, 95%, 47%, 2)",
    area: false,
  },
  purple: {
    card: "bg-[hsla(258,90%,66%,1)]",
    icon: "bg-[#8E44FF]/75",
    text: "text-white",
    waveFrom: "hsla(266, 84%, 57%, 0.45)",
    waveTo: "hsla(266, 84%, 57%, 0.16)",
    stroke: "hsla(266, 84%, 55%, 1)",
    area: false,
  },
};

const STATIC_PATHS: Record<Variant, string> = {
  cyan:
    "M0 75.1098L2.78483 73.046C5.56965 70.9822 11.1393 66.8546 16.709 61.196C22.2786 55.5374 27.8483 48.3478 33.4179 46.9383C38.9876 45.5288 44.5572 49.8994 50.1269 58.4474C55.6965 66.9953 61.2662 79.7205 66.8358 83.5531C72.4055 87.3857 77.9751 82.3256 83.5448 74.8941C89.1144 67.4627 94.6841 57.6599 100.254 50.8955C105.823 44.1311 111.393 40.4051 116.963 45.3592C122.532 50.3133 128.102 63.9477 133.672 67.0615C139.241 70.1753 144.811 62.7685 150.381 53.5742C155.95 44.3798 161.52 33.3979 167.09 25.9352C172.659 18.4726 178.229 14.5293 183.799 16.0694C189.368 17.6094 194.938 24.6328 200.507 35.0216C206.077 45.4103 211.647 59.1645 217.216 56.7554C222.786 54.3463 228.356 35.7739 233.925 23.6795C239.495 11.5851 245.065 5.96857 247.85 3.16032L250.634 0.352081",
  orange:
    "M0.432983 75.034L3.22539 69.3336C6.0178 63.6333 11.6026 52.2326 17.1874 48.51C22.7723 44.7875 28.3571 48.743 33.9419 56.252C39.5267 63.761 45.1116 74.8233 50.6964 79.7312C56.2812 84.6391 61.866 83.3926 67.4508 76.555C73.0357 69.7175 78.6205 57.2889 84.2053 56.6265C89.7901 55.9641 95.3749 67.0678 100.96 69.2564C106.545 71.4449 112.129 64.7182 117.714 59.7292C123.299 54.7403 128.884 51.4891 134.469 53.7749C140.054 56.0608 145.638 63.8838 151.223 66.176C156.808 68.4682 162.393 65.2297 167.978 53.3399C173.562 41.45 179.147 20.9088 184.732 10.2458C190.317 -0.417083 195.902 -1.20167 201.487 2.46707C207.071 6.13581 212.656 14.2579 218.241 13.9847C223.826 13.7115 229.411 5.04296 234.995 2.50091C240.58 -0.0411299 246.165 3.54327 248.958 5.33548L251.75 7.12768",
  purple:
    "M-0.333496 109.441L2.4665 100.153C5.2665 90.8663 10.8665 72.2919 16.4665 66.0244C22.0665 59.7569 27.6665 65.7963 33.2665 71.2173C38.8665 76.6384 44.4665 81.4412 50.0665 83.8958C55.6665 86.3505 61.2665 86.4571 66.8665 84.8598C72.4665 83.2625 78.0665 79.9614 83.6665 78.751C89.2665 77.5405 94.8665 78.4208 100.467 81.7877C106.067 85.1546 111.667 91.0082 117.267 85.4643C122.867 79.9203 128.467 62.9788 134.067 53.3372C139.667 43.6956 145.267 41.3539 150.867 40.3674C156.467 39.3809 162.067 39.7495 167.667 39.8709C173.267 39.9923 178.867 39.8665 184.467 41.7861C190.067 43.7057 195.667 47.6707 201.267 49.7603C206.867 51.8499 212.467 52.064 218.067 53.9265C223.667 55.7889 229.267 59.2996 234.867 50.6081C240.467 41.9167 246.066 21.0231 248.866 10.5763L251.667 0.129456",
};

function getNumericValue(value: string | number): number {
  if (typeof value === "number") return value;
  const match = String(value).match(/[\d.]+/);
  return match ? parseFloat(match[0]) : 0;
}

function generateDynamicPath(variant: Variant, value: number): string {
  const width = 251;
  const height = 110;
  const baseline = height - 25;

  let min = 0;
  let max = 1;
  if (variant === "cyan") {
    min = 0;
    max = 8;
  } else if (variant === "orange") {
    min = 0;
    max = 3000;
  } else if (variant === "purple") {
    min = 0;
    max = 10000;
  }

  const clamped = Math.max(min, Math.min(max, value));
  const t = max === min ? 0 : (clamped - min) / (max - min);

  const A = 10 + t * 20;

  const x1 = width * 0.16;
  const x2 = width * 0.33;
  const x3 = width * 0.5;
  const x4 = width * 0.66;
  const x5 = width * 0.83;
  const x6 = width;

  return [
    `M0 ${baseline}`,
    `C ${x1} ${baseline - A}, ${x2} ${baseline + 0.5 * A}, ${x3} ${baseline - 0.6 * A}`,
    `C ${x4} ${baseline - A}, ${x5} ${baseline + 0.7 * A}, ${x6} ${baseline - 0.8 * A}`,
  ].join(" ");
}

function getPathForValue(
  variant: Variant,
  value: string | number
): string {
  const str = String(value).trim();

  if (
    (variant === "cyan" && str === "4 hrs") ||
    (variant === "orange" && str === "1800 kcl") ||
    (variant === "purple" && str === "2200 steps")
  ) {
    return STATIC_PATHS[variant];
  }

  const num = getNumericValue(value);
  return generateDynamicPath(variant, num);
}

export function StatCard({
  title,
  value,
  icon: Icon,
  variant = "cyan",
}: StatCardProps) {
  const v = VARIANT_STYLES[variant];
  const path = getPathForValue(variant, value);

  return (
    <Card
      className={cn(
        "relative overflow-hidden border-0 shadow-md",
        "rounded-[6px] w-72 h-[168px]",
        "px-6 py-5",
        v.card,
        v.text
      )}
    >
      <div className="relative flex items-center gap-4">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-[10px]",
            v.icon
          )}
        >
          <Icon className="h-6 w-6 opacity-95" />
        </div>

        <div className="flex flex-col">
          <span className="text-[18px] font-semibold leading-tight">
            {title}
          </span>
          <span className="mt-1 text-[14px] opacity-90">{value}</span>
        </div>
      </div>

      <svg
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[88px] w-full"
        viewBox="0 0 251 110"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id={`wave-${variant}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={v.waveFrom} />
            <stop offset="100%" stopColor={v.waveTo} />
          </linearGradient>
        </defs>

        <path
          d={path}
          fill={v.area ? `url(#wave-${variant})` : "none"}
          stroke={v.stroke}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Card>
  );
}
