import { Box, Typography } from "@mui/material";

// TODO: add more details

export default function Page() {
   return (
      <Box
         sx={{
            display: "flex",
            flexDirection: "row-reverse",
            justifyContent: "space-between",
            gap: "1rem",
            alignItems: "center",
         }}
      >
         <Box
            component="img"
            src="img/data-blog/01.jpg"
            sx={{ maxWidth: "50%" }}
         ></Box>
         <Typography>
            ما در اینجا با گردآوری برترین مقالات و آموزش های روز دنیا به شما در
            نگه داری و پروش گل و گیاه در خانه کمک می کتیم
         </Typography>
      </Box>
   );
}
