import { Box, Card, Grid, Link, Typography } from "@mui/material";

import BlogCard from "./blogCard";
import data from "@/data/blogs.json";

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
                  fontSize: "2rem",
                  fontWeight: "700",
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
