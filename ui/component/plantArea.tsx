"use client";

import { Box, Card, Grid, Typography } from "@mui/material";

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
               width: "20%",
               height: "15vh",
               objectFit: "cover",
            }}
         ></Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               width: "100%",
               p: 2,
            }}
         >
            <Typography>{plant.name}</Typography>
            <Box
               component="a"
               sx={{
                  alignSelf: "flex-end",
               }}
            >
               ادامه مطلب
            </Box>
         </Box>
      </Card>
   );
}
