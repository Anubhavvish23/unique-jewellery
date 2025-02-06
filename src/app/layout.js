import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
 variable: "--font-geist-sans",
 subsets: ["latin"],
});

const geistMono = Geist_Mono({
 variable: "--font-geist-mono", 
 subsets: ["latin"],
});

export const metadata = {
 title: "Unique Jewellery ",
 description: "Unique Jewellery Shop",
 icons: {
   icon: [
     { url: '/bg.jpg' },
   ],
 },
};

export default function RootLayout({ children }) {
 return (
   <html lang="en">
      <body>
       {children}
     </body>
   </html>
 );
}