import { Playfair_Display } from "next/font/google";
import { Protest_Guerrilla } from "next/font/google";

export const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
});

export const protest_guerrilla = Protest_Guerrilla({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
