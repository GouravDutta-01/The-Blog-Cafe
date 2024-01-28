import React, { useContext, useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactPageIcon from "@mui/icons-material/ContactPage";
import CreateIcon from "@mui/icons-material/Create";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import LoginIcon from "@mui/icons-material/Login";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { useNavigate } from "react-router-dom";
import { Context } from "../context/Context";

export default function MobileMenu() {
  const [openMenu, setOpenMenu] = useState(false);
  const navigate = useNavigate();
  const { user, dispatch } = useContext(Context);

  const handleLogout = () => {
    setOpenMenu(false);
    dispatch({ type: "LOGOUT" });
    navigate("/login");
  };

  const handleMenuClick = (route) => {
    setOpenMenu(false);
    navigate(route);
  };

  return (
    <>
      <Drawer
        anchor="right"
        PaperProps={{
          sx: { width: "50%" },
        }}
        open={openMenu}
        onClose={() => setOpenMenu(false)}
      >
        <List>
          <ListItemButton onClick={() => handleMenuClick("/")}>
            <ListItemIcon>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/about")}>
            <ListItemIcon>
              <InfoIcon />
            </ListItemIcon>
            <ListItemText>About</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/contact")}>
            <ListItemIcon>
              <ContactPageIcon />
            </ListItemIcon>
            <ListItemText>Contact</ListItemText>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/write")}>
            <ListItemIcon>
              <CreateIcon />
            </ListItemIcon>
            <ListItemText>Write</ListItemText>
          </ListItemButton>
          {user ? (
            <>
              <ListItemButton onClick={() => handleMenuClick("/settings")}>
                <ListItemIcon>
                  <SettingsIcon />
                </ListItemIcon>
                <ListItemText>Settings</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText>Logout</ListItemText>
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton onClick={() => handleMenuClick("/login")}>
                <ListItemIcon>
                  <LoginIcon />
                </ListItemIcon>
                <ListItemText>Login</ListItemText>
              </ListItemButton>
              <ListItemButton onClick={() => handleMenuClick("/register")}>
                <ListItemIcon>
                  <PersonAddIcon />
                </ListItemIcon>
                <ListItemText>Register</ListItemText>
              </ListItemButton>
            </>
          )}
        </List>
      </Drawer>
      <IconButton
        sx={{ color: "white", marginLeft: "auto" }}
        onClick={() => setOpenMenu(!openMenu)}
      >
        <MenuIcon />
      </IconButton>
    </>
  );
}
