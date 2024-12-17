import LocalFont from "next/font/local";

const FarhangFont = LocalFont({
  src: [
    {
      path: "../../public/fonts/Farhang/Farhang2FaNum-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../public/fonts/Farhang/Farhang2FaNum-Bold.woff2",
      weight: "700",
    },
  ],
  variable: "--font-farhang",
  style: "normal",
  display: "block",
});

export default FarhangFont;
