"use client";

import { Box, Button, Card, Grid, Link, Typography } from "@mui/material";

import NextLink from "next/link";
import data from "@/data/plants.json";

type plantType = {
   id: number;
   name: string;
   imgRcs: string;
};

export default function PlantArea() {
   return (
      <Grid container spacing={2}>
         <Grid
            item
            xs={12}
            sx={{ display: "flex", justifyContent: "space-between" }}
         >
            <Typography
               variant="h2"
               // sx={{
               //    fontWeight: "700",
               //    fontSize: {
               //       lg: "2rem",
               //       sm: "3vw",
               //    },
               // }}
            >
               گیاهان آپارتمانی را بهتر بشناسیم
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
                  مشاهده گیاهان آپارتمانی
               </Link>
            </Button>
         </Grid>
         {data.slice(0, 4).map((item) => (
            <Grid item key={item.id} xs={12} sm={6}>
               <PlantCard {...item} />
            </Grid>
         ))}
      </Grid>
   );
}

function PlantCard(plant: plantType) {
   return (
      <Card
         sx={{
            display: "flex",
            alignItems: "center",
         }}
      >
         <Box
            component="img"
            src={plant.imgRcs}
            alt={plant.name}
            sx={{
               width: "25%",
               height: "20vh",
               objectFit: "cover",
            }}
         ></Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               justifyContent: "space-between",
               width: "100%",
               height: "20vh",
               p: 2,
               boxSizing: "border-box",
            }}
         >
            <Typography
               sx={{
                  pt: "4vh",
                  fontSize: "1.2rem",
                  fontWeight: "500",
               }}
            >
               {plant.name}
            </Typography>
            <Link
               href="#"
               component="a"
               sx={{
                  alignSelf: "flex-end",
                  fontFamily: "Va",
               }}
               color="secondary"
            >
               ادامه مطلب
            </Link>
         </Box>
      </Card>
   );
}
