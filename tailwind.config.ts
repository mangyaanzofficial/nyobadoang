import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: { extend: { colors: { ink: "#08090b", panel: "#111317", muted: "#9297a1" } } },
  plugins: []
};
export default config;