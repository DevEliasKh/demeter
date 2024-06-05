"use client";

import { Box, Card, Grid, Link, Typography } from "@mui/material";

import data from "@/data/plants.json";

type plantType = {
   id: number;
   name: string;
   imgRcs: string;
};

export default function PlantArea() {
   console.log(data);
   return (
      <Grid container spacing={2}>
         <Grid item xs={12}>
            <Typography
               sx={{
                  fontWeight: "500",
                  fontSize: "1.5rem",
               }}
            >
               گیاهان آپارتمانی را بهتر بشناسیم
            </Typography>
         </Grid>
         {data.map((item) => (
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
