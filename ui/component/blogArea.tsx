import { Box, Card, Grid, Link, Typography } from "@mui/material";

import data from "@/data/blogs.json";

type blogData = {
   id: number;
   name: string;
   imgRcs: string;
   summary: string;
};

export default function BlogArea() {
   return (
      <Grid
         container
         spacing={2}
         sx={{
            mt: "1rem",
         }}
      >
         <Grid item xs={12}>
            <Typography
               sx={{
                  fontSize: "1.5rem",
                  fontWeight: "500",
               }}
            >
               آخرین مقالات
            </Typography>
         </Grid>

         {data.map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6}>
               <BlogCard {...blog} />
            </Grid>
         ))}
      </Grid>
   );
}

function BlogCard(blog: blogData) {
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
               component="a"
               href="#"
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
