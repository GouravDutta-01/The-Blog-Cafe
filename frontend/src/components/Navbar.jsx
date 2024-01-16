import React, { useContext, useEffect, useState } from "react";
import {
  AppBar,
  Avatar,
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
import { Context } from "../context/Context";

export default function Navbar() {
  const PF = "http://localhost:5000/images/";
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  const routes = ["/", "/about", "/contact", "/write", "/login", "/register"];
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down("md"));
  const location = useLocation();
  const [value, setValue] = useState(location.pathname);

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
            <HamburgerMenu />
          ) : (
            <>
              <Tabs
                sx={{
                  marginLeft: "auto",
                  marginRight: "auto",
                  display: "flex",
                  justifyContent: "center",
                }}
                textColor="inherit"
                value={value}
                onChange={(e, newValue) => setValue(newValue)}
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
                {user ? (
                  <></>
                ) : (
                  <>
                    <Tab
                      label="LOGIN"
                      value={routes[4]}
                      component={Link}
                      to={routes[4]}
                    />
                    <Tab
                      label="REGISTER"
                      value={routes[5]}
                      component={Link}
                      to={routes[5]}
                    />
                  </>
                )}
                <Tab label={user && "LOGOUT"} onClick={handleLogout} />
              </Tabs>
              {user ? (
                <Link to="/settings">
                  <Avatar src={PF + user.profilePic} sx={{ marginLeft: 2 }} />
                </Link>
              ) : (
                <></>
              )}
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
}
