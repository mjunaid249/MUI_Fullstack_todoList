import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuHere from "./Drawer";
import { Link } from "react-router-dom";

export default function Appbarhere() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar variant="dense">
          <MenuHere />
          <Typography variant="h6" color="inherit" component="div">
            <Link to={"/"}>Todo List</Link>
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
