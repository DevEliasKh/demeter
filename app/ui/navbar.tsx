"use client";

import "../style/custom.css";

import {
   AppBar,
   Box,
   Button,
   IconButton,
   Link,
   Menu,
   MenuItem,
   MenuList,
   Toolbar,
   Typography,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import SpaIcon from "@mui/icons-material/Spa";

const navbarLink = ["خانه", "مقالات", "گالری", "درباره ما", "تماس با ما "];

export default function Navbar() {
   const [menuShow, setMenuShow] = useState<null | HTMLElement>(null);

   const openMenu = (event: MouseEvent<HTMLElement>) => {
      setMenuShow(event.currentTarget);
   };

   const closeMenu = () => {
      setMenuShow(null);
   };

   return (
      <AppBar
         position="static"
         elevation={0}
         sx={{ borderRadius: "1rem", mt: "1rem" }}
      >
         <Toolbar
            sx={{
               display: "flex",
               flexDirection: "row-reverse",
               justifyContent: "space-between",
            }}
         >
            <Box
               sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: 2,
                  flexDirection: "row-reverse",
               }}
            >
               {navbarLink.map((item) => (
                  <Button
                     key={item}
                     sx={{ color: "secondary.main" }}
                     disableRipple
                  >
                     {item}
                  </Button>
               ))}
            </Box>
            <IconButton
               id="basic-btn"
               aria-controls={Boolean(menuShow) ? "basic-menu" : undefined}
               aria-haspopup="true"
               aria-expanded={Boolean(menuShow) ? "true" : undefined}
               sx={{ display: { xs: "flex", sm: "none" } }}
               onClick={openMenu}
            >
               <MenuIcon />
            </IconButton>
            <Menu
               id="basic-menu"
               anchorEl={menuShow}
               open={Boolean(menuShow)}
               onClose={closeMenu}
               MenuListProps={{
                  "aria-labelledby": "basic-button",
               }}
               sx={{
                  display: { xs: "flex", sm: "none" },
                  gap: 2,
                  width: "100%",
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  "& .MuiMenu-paper": { backgroundColor: "primary.main" },
               }}
               elevation={2}
            >
               {navbarLink.map((item) => (
                  <MenuItem
                     key={item}
                     sx={{
                        color: "secondary.main",
                        direction: "rtl",
                     }}
                  >
                     <Link sx={{ direction: "rtl" }}>{item}</Link>
                  </MenuItem>
               ))}
            </Menu>
            <IconButton color="secondary">
               <SpaIcon />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
}
