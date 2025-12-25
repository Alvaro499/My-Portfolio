//Import Components
import MainLayout from "@/components/Layout/main-layout.jsx";
//import Navbar from "@/components/Navbar/navbar.jsx";

//Pages
//import IntroductionBanner from "@/pages/introduction-banner.jsx";

//Import Fonts from next/font
import { Geist } from "next/font/google";

// Import CSS styles 
import "@/styles/globals.css";
import "@/styles/main-layout.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className={geistSans.className}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </div>
  );
}
