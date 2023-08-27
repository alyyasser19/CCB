import { Playfair, Lato } from "next/font/google";

export const playfair = Playfair({
  subsets: ["latin"],
});

export const lato = Lato({
  weight: ["400", "700", "100", "300", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
