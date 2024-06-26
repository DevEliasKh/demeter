import { Box, Button, IconButton, Link } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import NextLik from "next/link";
import SpaIcon from "@mui/icons-material/Spa";
import TelegramIcon from "@mui/icons-material/Telegram";
import XIcon from "@mui/icons-material/X";
import { navigate } from "@/lib/functions";

export default function Footer() {
   const navbarLink = ["خانه", "مقالات", "گالری", "درباره ما", "تماس با ما "];

   return (
      <Box
         sx={{
            bgcolor: "primary.main",
            borderRadius: "1rem",
            my: "1rem",
            p: "0.5rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexDirection: { xs: "column", sm: "row" },
         }}
      >
         <Box>
            <IconButton color="secondary">
               <SpaIcon />
            </IconButton>
         </Box>
         <Box sx={{ display: "flex" }}>
            {navbarLink.map((item) => {
               const path = navigate(item);
               return (
                  <Button
                     key={item}
                     sx={{ color: "secondary.main" }}
                     disableRipple
                  >
                     <Link component={NextLik} href={path} color="secondary">
                        {item}
                     </Link>
                  </Button>
               );
            })}
         </Box>
         <Box>
            {/* Social medias */}
            <IconButton color="secondary">
               <FacebookIcon />
            </IconButton>
            <IconButton color="secondary">
               <InstagramIcon />
            </IconButton>
            <IconButton color="secondary">
               <TelegramIcon />
            </IconButton>
            <IconButton color="secondary">
               <XIcon />
            </IconButton>
         </Box>
      </Box>
   );
}
