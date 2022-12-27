import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Accueil() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
    >
      <Box
        style={{
          display: "flex",
          borderRadius: 10,
          width: "99%",
          height: 800,
          backgroundImage: `url(${"https://www.gannett-cdn.com/presto/2018/10/08/PNAS/0681c148-3f24-4a70-8a76-bf5bedeff536-Parkside_Builders_Waterford_Villagedng_0023hdr.jpg?crop=3599,2015,x0,y0&width=2560"})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h3"
          color={"white"}
          fontWeight="bold"
          style={{ lineClamp: 2 }}
        >
          Discover a place
          <br />
          you'll love to live
        </Typography>
      </Box>
    </Box>
  );
}
