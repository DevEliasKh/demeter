import { Box, Card, Link, Typography } from "@mui/material";

import NextLink from "next/link";

type blogData = {
   id: number;
   name: string;
   imgRcs: string;
   summary: string;
};

export default function BlogCard(blog: blogData) {
   return (
      <Card
         sx={{
            display: "flex",
            flexDirection: "column",
         }}
      >
         <Box
            component="img"
            alt={`${blog.name}`}
            src={`${blog.imgRcs}`}
            sx={{}}
         ></Box>
         <Box
            sx={{
               display: "flex",
               flexDirection: "column",
               gap: "0.7rem",
               p: "1rem",
            }}
         >
            <Typography
               sx={{
                  fontSize: "1.2rem",
               }}
            >
               {blog.name}
            </Typography>
            <Typography>{blog.summary}</Typography>
            <Link
               component={NextLink}
               href={`blogs/${blog.id}`}
               color="secondary"
               sx={{
                  alignSelf: "flex-end",
               }}
            >
               ادامه مطلب
            </Link>
         </Box>
      </Card>
   );
}
