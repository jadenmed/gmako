/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        mako: { blue: "#0055ff", ink: "#1a1a1a", body: "#4a4a4a", muted: "#808080", line: "#d9d9d9", rule: "#e5e5e5", tint: "#f2f6ff" },
      },
      fontFamily: {
        // PP NeueBit is a licensed font: add the files in src/input.css (@font-face).
        pixel: ['"PP NeueBit"', "ui-monospace", "SFMono-Regular", "Menlo", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: { none: "0" },
      maxWidth: { page: "1440px" },
    },
  },
  plugins: [],
};
