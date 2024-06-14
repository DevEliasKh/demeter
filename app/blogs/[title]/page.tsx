import { Box, Typography } from "@mui/material";

import Image from "next/image";
import data from "@/data/blogs.json";

// TODO: fix not displaying image

export default function Page(title: any) {
   const currentBlog = data.filter((blog) => blog.id == title.params.title)[0];

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
