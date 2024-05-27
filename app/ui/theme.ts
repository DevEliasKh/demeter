"use client";

import "@/fonts/vazirmatn-v33.003/Vazirmatn-Variable-font-face.css";

import { createTheme } from "@mui/material";

export const theme = createTheme({
   palette: {
      primary: { main: "#E1F4CB" },
      secondary: {
         main: "#14281d",
      },
   },
   typography: {
      fontFamily: "Vazirmatn, sans-serif",
   },
});
