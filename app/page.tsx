import { Box, Button, Container, Typography } from "@mui/material";

import Navbar from "./ui/navbar";

export default function Home() {
   return (
      <Container maxWidth={false}>
         <Navbar />
         <Box
            sx={{
               display: "flex",
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
                  alignItems: "flex-end",
               }}
            >
               <Typography variant="h1">دمتر</Typography>
               <Typography>
                  یادگیری هر آنچه برای پرورش گل و گیاه در خانه نیاز دارید
               </Typography>
               <Typography>
                  ما در اینجا با گردآوری برترین مقالات و آموزش های روز دنیا به
                  شما در نگه داری و پروش گل و گیاه در خانه کمک می کتیم
               </Typography>

               <Button
                  variant="contained"
                  sx={{
                     alignSelf: "self-start",
                  }}
               >
                  مشاهده مقالات
               </Button>
            </Box>
         </Box>
      </Container>
   );
}
