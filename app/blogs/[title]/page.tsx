import { Box, Typography } from "@mui/material";

import data from "@/data/blogs.json";

// TODO: fix not displaying image

export default function Page(title: any) {
   const currentBlog = data.filter((blog) => blog.id == title.params.title)[0];

   return (
      <Box>
         <Box
            component="img"
            src={currentBlog.imgRcs}
            alt={currentBlog.name}
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
