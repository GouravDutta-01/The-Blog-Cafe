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
              <ListItemText>Home</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/about")}>
            <ListItemIcon>
              <ListItemText>About</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/contact")}>
            <ListItemIcon>
              <ListItemText>Contact</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          <ListItemButton onClick={() => handleMenuClick("/write")}>
            <ListItemIcon>
              <ListItemText>Write</ListItemText>
            </ListItemIcon>
          </ListItemButton>
          {user ? (
            <>
              <ListItemButton onClick={() => handleMenuClick("/settings")}>
                <ListItemIcon>
                  <ListItemText>Settings</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon>
                  <ListItemText>Logout</ListItemText>
                </ListItemIcon>
              </ListItemButton>
            </>
          ) : (
            <>
              <ListItemButton onClick={() => handleMenuClick("/login")}>
                <ListItemIcon>
                  <ListItemText>Login</ListItemText>
                </ListItemIcon>
              </ListItemButton>
              <ListItemButton onClick={() => handleMenuClick("/register")}>
                <ListItemIcon>
                  <ListItemText>Register</ListItemText>
                </ListItemIcon>
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
