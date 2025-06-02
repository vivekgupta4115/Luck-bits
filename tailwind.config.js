/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      xs2: "375px",
      xs1: "390px",
      xs: "400px",
      xsm: "500px",
      sm: "640px",
      md: "800px",
      // ----
      md2: "768px",
      xs4: "425px",
      xs3: "321px",
      sm3: "468px",
      x5: '775px',     // 5 images
      x6: '936px',     // 6 images
      x7: '1063px',    // 7 images
      x8: '1248px',    // 8 images
      x9: '1359px', // upper bound for 8 images
      
      // ----
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      "3xl": "1836px",
    },
    extend: {
      keyframes: {
        translateAnimation: {
          "0%": { transform: "translate(0, 0)" },
          "100%": { transform: "translate(var(--x-target), var(--y-target))" },
        },
        pulseFadeOut: {
          "0%": { opacity: 1, transform: "scale(0)" },
          "100%": { opacity: 0, transform: "scale(1)" },
        },
        zoomIn: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.2)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        zoomIn: "zoomIn 1s ease-in-out",
        translateAnimation: "translateAnimation 2s ease-in-out forwards",
        "pulse-fade": "pulseFadeOut 2s ease-in-out infinite",
      },
      animation: {
        "bounce-slow": "bounce 1.2s infinite",
      },

      fontFamily: {
        roboto: [" roboto, sans-serif;"],
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        xs: "11px",
        xsm: "13px",
        sm: "16px",
        lg: "18px",
      },
      colors: {
        mainBg: "#000C24",
        titleBg: "#464F60",
        cardBg: "#0D182F",
        bg1: "#263044",
        bg2: "#1A253A",
        bg3: "#333D50",
        bg4: "#55bfe2",
        bg4_dark: "#00A5DE",
        bg5: "#4ab8e6",
        // -------------------------------------
        bg6: "#495566",
        hederColor: "#f2f3d2",
        hederColor2: "#6f8c97",
        hederColor3: "#b0bfae",
        headerBg: "#263045",
        headerBg2: "#0d182f",
        headerbg3: "#464f61",
        headerBgSelected: "#333d50",
        headerBgSelected2: "#172238",
        borderColor:"#2b3549",
        // ----------------------------------
        yellow: "#e5ce00",
        // pink: "#ad005c",
        green: "#17B15E",
        voilet: "#9B48DB",
        red: "#FF0000",
        redError: "#33142C",
        redLight: "#374992",
        blackLight: "#707070",
        gray: "#666666",
        lightGray: "#768096",
        gold: "#ff8310",
        chocolate: "#B1835A",
        border1: "#eaeaea",
        inputBg: "#F0F0F5",
        customred: "#FF0000",
        customlightBlue: "#61A9FE",
        customdarkBlue: "#2B3270",
        customlightbtn: "#29A3F3",
        customdarkBluebtn: "#297DF2",
        blackAviator1: "#0E0E0E",
        blackAviator2: "#1B1C1D",
        blackAviator3: "#0C0C0C",
        blackAviator4: "#2C2D30",
        blackAviatorText: "#6D6F78",
        redAviator: "#CF2030",
        greenAviator: "#29AA09",
        greenBorderAviator: "#B1F1A4",
        textGray1: "#ffffffcc",
        textGray2: "#999EA7",
        textGray: "#E6E7EA",
        text80: "#ffffff80",
        textb3: "#ffffffb3",
        footballBg: "#9A983C",
        footballIcon: "#1BAB7D",
        tennisBg: "#1AA377",
        tennisIcon: "#A19E3E",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          ".hide-scrollbar": {
            "-ms-overflow-style": "none" /* IE and Edge */,
            "scrollbar-width": "none" /* Firefox */,
          },
          ".hide-scrollbar::-webkit-scrollbar": {
            display: "none" /* Chrome, Safari, and Opera */,
          },
        },
        ["responsive", "hover"]
      );
    },
  ],
};
