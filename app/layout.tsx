import "./globals.css";

import { Container, ThemeProvider } from "@mui/material";

import Footer from "@/ui/component/footer";
import type { Metadata } from "next";
import Navbar from "@/ui/component/navbar";
import { theme } from "@/ui/theme";

export const metadata: Metadata = {
   title: "Demeter",
   description: "Generated by create next app",
};

export default function RootLayout({
   children,
}: Readonly<{
   children: React.ReactNode;
}>) {
   return (
      <html lang="fa" dir="rtl">
         <ThemeProvider theme={theme}>
            <body>
               <Container maxWidth={false}>
                  <Navbar />
                  {children}
                  <Footer />
               </Container>
            </body>
         </ThemeProvider>
      </html>
   );
}
