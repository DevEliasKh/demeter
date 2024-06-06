import { Box, Grid, ImageList, ImageListItem } from "@mui/material";

import data from "@/data/gallery.json";

// import Image from "next/image";

export default function Gallery() {
   return (
      <Box>
         <ImageList variant="masonry" cols={3} gap={12}>
            {data.map((img) => (
               <ImageListItem key={img.id}>
                  <img
                     // component="img"
                     src={img.imgRcs}
                     alt={img.name}
                     loading="lazy"
                  />
               </ImageListItem>
            ))}
         </ImageList>
      </Box>
   );
}
