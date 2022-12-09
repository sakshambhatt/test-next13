import { Cedarville_Cursive, Eater } from "@next/font/google";

const cursive = Cedarville_Cursive({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["system-ui"],
  display: "swap",
});

const eater = Eater({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  fallback: ["system-ui"],
  display: "swap",
});

export { cursive, eater };
