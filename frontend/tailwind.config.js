export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        background: "#f6faf9",
        surface: "#f6faf9",
        "surface-container-lowest": "#ffffff",
        "surface-container-low": "#f0f4f4",
        "surface-container": "#eaefee",
        "surface-container-high": "#e4e9e8",
        "surface-container-highest": "#dfe3e3",
        "on-surface": "#171d1c",
        "on-surface-variant": "#3d4949",
        primary: "#006767",
        "primary-container": "#008282",
        "on-primary": "#ffffff",
        secondary: "#5f5e5e",
        outline: "#6d7979",
        "outline-variant": "#bcc9c8",
        error: "#ba1a1a",
        "error-container": "#ffdad6",
        "on-error": "#ffffff"
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"]
      },
      maxWidth: {
        layout: "1280px"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        full: "9999px"
      },
      boxShadow: {
        soft: "0 4px 20px rgba(0,0,0,0.08)"
      }
    }
  },
  plugins: []
};
