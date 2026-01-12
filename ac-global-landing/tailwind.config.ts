import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#1a1a1a", // Dark slate/black
                secondary: "#f5f5f5", // Off-white
                accent: "#333333", // Dark grey accent
            },
            fontFamily: {
                sans: ["var(--font-open-sans)"],
                heading: ["var(--font-montserrat)"],
            },
        },
    },
    plugins: [],
};
export default config;
