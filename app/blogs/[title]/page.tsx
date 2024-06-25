"use client";

import { Box, Typography } from "@mui/material";

import Image from "next/image";
import data from "@/data/blogs.json";
import { useParams } from "next/navigation";

export default function Page() {
   const title: { title: string } = useParams();

   const currentBlog = data.filter((blog) => blog.id == +title.title)[0];

   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
         }}
      >
         <Box
            component={Image}
            src={`/${currentBlog.imgRcs}`}
            alt={currentBlog.name}
            fill={true}
            sx={{
               maxWidth: "100%",
               maxHeight: "60vh",
               objectFit: "cover",
               position: "relative !important",
            }}
         ></Box>
         <Typography
            sx={{
               fontSize: "1.3rem",
               fontWeight: "600",
            }}
         >
            {currentBlog.name}
         </Typography>
         <Typography>{currentBlog.summary}</Typography>
      </Box>
   );
}
