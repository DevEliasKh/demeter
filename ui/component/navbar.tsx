"use client";

import "@/style/custom.css";

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
   Tooltip,
   Typography,
} from "@mui/material";
import React, { MouseEvent, useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import NextLink from "next/link";
import PersonIcon from "@mui/icons-material/Person";
import SpaIcon from "@mui/icons-material/Spa";
import { navigate } from "@/lib/functions";

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
         sx={{ borderRadius: "1rem", my: "1rem" }}
      >
         <Toolbar
            sx={{
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <Box
               sx={{
                  display: { xs: "none", sm: "flex" },
                  gap: 2,
               }}
            >
               {navbarLink.map((item) => {
                  const path = navigate(item);
                  return (
                     <Button
                        key={item}
                        sx={{ color: "secondary.main" }}
                        disableRipple
                     >
                        <Link
                           component={NextLink}
                           href={path}
                           color="secondary"
                        >
                           {item}
                        </Link>
                     </Button>
                  );
               })}
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
                     <Button sx={{ direction: "rtl" }} color="secondary">
                        {item}
                     </Button>
                  </MenuItem>
               ))}
            </Menu>
            <Box
               sx={{
                  display: "flex",
                  gap: "1rem",
               }}
            >
               <Tooltip title="Log In">
                  <IconButton color="secondary">
                     <PersonIcon />
                  </IconButton>
               </Tooltip>
               <Tooltip title="Demeter">
                  <IconButton color="secondary" size="large">
                     <SpaIcon />
                  </IconButton>
               </Tooltip>
            </Box>
         </Toolbar>
      </AppBar>
   );
}
