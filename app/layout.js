import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ClerkProvider, SignedOut, SignIn, SignInButton, UserButton } from "@clerk/nextjs";



const inter = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "FileFlow",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    
      <html lang="en">
        <ClerkProvider>
        <body className={inter.className}>
          {children}
        </body>
        </ClerkProvider>
      </html>
   
    
  );
}
