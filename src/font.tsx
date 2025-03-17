import { Poppins } from "next/font/google";
import localFont from "next/font/local";

export const poppins = Poppins({
  weight: ["400", "500", "600"],
  subsets: ["latin"],
});

export const caps = localFont({ src: "../public/fonts/caps.otf" });

export const myFont = localFont({
  src: "../public/fonts/my_font.otf",
});

export const recoletaRegular = localFont({
  src: "../public/fonts/Recoleta Regular.otf",
});

export const recoletaBold = localFont({
  src: "../public/fonts/Recoleta Bold.otf",
});

export const recoletaSemiBold = localFont({
  src: "../public/fonts/Recoleta SemiBold.otf",
});
