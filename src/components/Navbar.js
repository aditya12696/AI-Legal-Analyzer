import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: "#1e3a8a" }}>
      <Toolbar>
        <img src={logo} alt="Logo" style={{ height: 40, marginRight: 10 }} />
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          AI Legal Analyzer
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
