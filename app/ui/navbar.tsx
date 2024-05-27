"use client";

import {
   AppBar,
   Box,
   Button,
   IconButton,
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
      <AppBar position="static" elevation={0}>
         <Toolbar
            sx={{
               display: "flex",
               flexDirection: "row-reverse",
               justifyContent: "space-between",
            }}
         >
            <Box
               sx={{
                  display: { xs: "none", md: "flex" },
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
               sx={{ display: { xs: "flex", md: "none" } }}
               onClick={openMenu}
            >
               <MenuIcon />
            </IconButton>
            <Menu
               open={Boolean(menuShow)}
               onClose={closeMenu}
               sx={{
                  display: { xs: "flex", md: "none" },
                  gap: 2,
                  flexDirection: "column",
               }}
            >
               <MenuList>
                  {navbarLink.map((item) => (
                     <MenuItem
                        key={item}
                        sx={{ color: "secondary.main", direction: "rtl" }}
                     >
                        {item}
                     </MenuItem>
                  ))}
               </MenuList>
            </Menu>
            <IconButton color="secondary">
               <SpaIcon />
            </IconButton>
         </Toolbar>
      </AppBar>
   );
}
