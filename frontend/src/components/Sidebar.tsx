import React, { useState } from "react";
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import { AddBox } from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const navItems = [
    { label: "DashBoard", path: "/dashboard" },
    { label: "Patients", path: "/patients" },
    { label: "Alerts", path: "/alerts" },
    { label: "Reports", path: "/reports" },
    { label: "Settings", path: "/settings" },
  ];
  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: "flex" }}>
      {/*AppBar Content*/}
      <AppBar
        position="fixed"
        sx={{ zIndex: 1300, backgroundColor: "#0f172a" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            edge="start"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            HealthCare Admin
          </Typography>
        </Toolbar>
      </AppBar>
      {/*SideBar*/}
      <Drawer
        anchor="left"
        open={open}
        onClose={toggleDrawer}
        sx={{
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            backgroundColor: "#0f172a",
            color: "#fff",
          },
        }}
      >
        <Toolbar />
        <List>
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              style={{ textDecoration: "none", color: "inherit" }}
              onClick={toggleDrawer}
            >
              {({ isActive }) => (
                <ListItemButton
                  sx={{
                    backgroundColor: isActive ? "#1e3a8a" : "transparent",
                    "&:hover": { backgroundColor: "#1e40af" },
                  }}
                >
                  <ListItemText primary={item.label} />
                </ListItemButton>
              )}
            </NavLink>
          ))}
        </List>
      </Drawer>
      {/*content placeholder*/}
      <Box component="main" sx={{ flexGrow: 1, p: 3, mt: 8 }}>
        <Typography variant="h5">Main Content Goes Here</Typography>
      </Box>
    </Box>
  );
};

export default Sidebar;
