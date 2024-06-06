"use client";

import "@/fonts/vazirmatn-v33.003/Vazirmatn-Variable-font-face.css";

import { createTheme } from "@mui/material";
import { forwardRef } from "react";

export const theme = createTheme({
   direction: "rtl",
   palette: {
      primary: { main: "#E1F4CB" },
      secondary: {
         main: "#14281d",
      },
   },
   typography: {
      fontFamily: "Vazirmatn, sans-serif",
   },
   components: {
      MuiLink: {
         styleOverrides: {
            root: {
               "&.MuiLink-root": {
                  textDecoration: "none",
                  fontFamily: "Vazirmatn, sans-serif",
               },
            },
         },
      },
   },
});
