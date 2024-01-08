import React, { useEffect, useState } from "react";
import {
  AppBar,
  Button,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { HistoryEdu } from "@mui/icons-material";
import HamburgerMenu from "./HamburgerMenu";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const routes = ["/", "/about", "/contact", "/write", "/login", "/register"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const [value, setValue] = useState(routes[0]);
  const location = useLocation();
  useEffect(() => {
    // Update the selected tab based on the current URL pathname
    setValue(location.pathname);
  }, [location.pathname]);
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#05360c" }}>
        <Toolbar>
          <HistoryEdu />
          <Typography>TheBlogCafe</Typography>
          {isMatch ? (
            <>
              <HamburgerMenu />
            </>
          ) : (
            <>
              <Tabs
                sx={{ marginLeft: "auto" }}
                textColor="inherit"
                value={value}
                onChange={(e, value) => setValue(value)}
                indicatorColor=""
              >
                <Tab
                  label="HOME"
                  value={routes[0]}
                  component={Link}
                  to={routes[0]}
                />
                <Tab
                  label="ABOUT"
                  value={routes[1]}
                  component={Link}
                  to={routes[1]}
                />
                <Tab
                  label="CONTACT"
                  value={routes[2]}
                  component={Link}
                  to={routes[2]}
                />
                <Tab
                  label="WRITE"
                  value={routes[3]}
                  component={Link}
                  to={routes[3]}
                />
              </Tabs>
              <Button
                sx={{ marginLeft: "auto" }}
                variant="contained"
                color="success"
                value={routes[4]}
                component={Link}
                to={routes[4]}
              >
                LOGIN
              </Button>
              <Button
                sx={{ marginLeft: "10px" }}
                variant="contained"
                color="success"
                value={routes[5]}
                component={Link}
                to={routes[5]}
              >
                REGISTER
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
