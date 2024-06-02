import "./globals.css";

import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material";
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
      <html lang="en" dir="rtl">
         <ThemeProvider theme={theme}>
            <body>{children}</body>
         </ThemeProvider>
      </html>
   );
}
