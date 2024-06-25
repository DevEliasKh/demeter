import { Box, Button, Card, Grid, Link, Typography } from "@mui/material";

import BlogCard from "./blogCard";
import NextLink from "next/link";
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
         <Grid
            item
            xs={12}
            sx={{
               display: "flex",
               justifyContent: "space-between",
            }}
         >
            <Typography variant="h2">آخرین مقالات</Typography>
            <Button
               variant="contained"
               sx={{
                  alignSelf: "self-end",
                  "&:hover": {
                     color: "primary.main",
                     backgroundColor: "secondary.main",
                  },
                  fontSize: "clamp(1vw,1rem,2vw)",
               }}
            >
               <Link
                  component={NextLink}
                  href={"./blogs"}
                  color="secondary"
                  sx={{ ":hover": { color: "primary.main" } }}
               >
                  مشاهده مقالات
               </Link>
            </Button>
         </Grid>

         {data.slice(0, 4).map((blog) => (
            <Grid item key={blog.id} xs={12} sm={6}>
               <BlogCard {...blog} />
            </Grid>
         ))}
      </Grid>
   );
}
