import { Box, Button, Link, Typography } from "@mui/material";

import BlogArea from "@/ui/component/blogArea";
import NextLink from "next/link";
// import Gallery from "@/ui/component/gallery";
import PlantArea from "@/ui/component/plantArea";

export default function Home() {
   return (
      <Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: { xs: "column", sm: "row-reverse" },
               Width: "100vw",
               justifyContent: "space-between",
               alignItems: "center",
            }}
         >
            <Box
               component="img"
               alt="image of zz plants"
               src="img/bgcover.png"
               sx={{ width: "40vw" }}
            />
            <Box
               sx={{
                  display: "flex ",
                  flexDirection: "column",
                  gap: "2vw",
                  maxWidth: "80ch",
                  width: "100%",
                  mb: "1rem",
               }}
            >
               <Typography
                  sx={{
                     mb: "1vw",
                     fontWeight: "900",
                     fontSize: "clamp(3vw,2rem,10vw)",
                  }}
               >
                  دمتر
               </Typography>
               <Typography
                  color="secondary"
                  sx={{
                     fontWeight: "400",
                     fontSize: "clamp(2vw,1.6rem,3vw)",
                  }}
               >
                  یادگیری هر آنچه برای پرورش گل و گیاه در خانه نیاز دارید
               </Typography>
               <Typography
                  sx={{
                     fontSize: "clamp(1vw,1.2rem,2vw)",
                  }}
               >
                  ما در اینجا با گردآوری برترین مقالات و آموزش های روز دنیا به
                  شما در نگه داری و پروش گل و گیاه در خانه کمک می کتیم
               </Typography>

               <Button
                  variant="contained"
                  sx={{
                     alignSelf: "self-end",
                     "&:hover": {
                        color: "primary.main",
                        backgroundColor: "secondary.main",
                     },
                     fontSize: "clamp(1vw,1rem,2vw)",
                  }}
               >
                  <Link
                     component={NextLink}
                     href={"./blogs"}
                     color="secondary"
                     sx={{ ":hover": { color: "primary.main" } }}
                  >
                     مشاهده مقالات
                  </Link>
               </Button>
            </Box>
         </Box>
         <PlantArea />
         <BlogArea />
         {/* TODO: add gallery */}
         {/* <Gallery /> */}
      </Box>
   );
}
