"use client";

import { Box } from "@mui/material";
import data from "@/data/plants.json";

export default function PlantArea() {
   console.log(data);
   return <div>plant area</div>;
}

function PlantCard() {
   return <Box></Box>;
}
