import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import "./navbar.css";

export default function NavBar() {
  return (
    <Box sx={{ width: "100%", display: "flex" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "black",
        }}
      >
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "orange" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" fontFamily={"Yellowtail"}>
            Real Estate
          </Typography>
          <Button sx={{ color: "orange" }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
