module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "hsl(var(--primary))",
          "primary-foreground": "hsl(var(--primary-foreground))",
        },
      },
    },
    plugins: [],
  }