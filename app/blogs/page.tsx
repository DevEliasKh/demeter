import { Box, Container, Grid } from "@mui/material";

import BlogCard from "@/ui/component/blogCard";
import { BloomFilter } from "next/dist/shared/lib/bloom-filter";
import data from "@/data/blogs.json";

export default function page() {
   return (
      <Grid
         container
         spacing={2}
         sx={{
            Width: "100vw",
            boxSizing: "border-box",
         }}
      >
         {data.map((blog) => (
            <Grid
               item
               key={blog.id}
               xs={12}
               sm={6}
               sx={{ boxSizing: "border-box" }}
            >
               <BlogCard key={blog.id} {...blog} />
            </Grid>
         ))}
      </Grid>
   );
}
