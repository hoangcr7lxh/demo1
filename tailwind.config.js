module.exports = {
    content: [
      "./*.html"
    ],
    theme: {
      extend: {
        colors: {
          "cool-gray": {
            900: "#111827",
          },
          gray: {
            100: "#F4F5F7",
            900: "#18191F"
          },
          purple: {
            400: "#8C30F5",
          }
        },
        fontSize: {
          h1: ["72px", "98px"],
          h2: ["48px", "64px"],
          h3: ["24px", "32px"],
          lead1: ["18px", "32px"],
          subtitle2: ["18px", "28px"],
        },
        fontFamily: {
          inter: "Inter",
        }
      },
    },
    plugins: [],
  }