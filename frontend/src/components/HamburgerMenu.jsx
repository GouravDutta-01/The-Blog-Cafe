import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React, { useState } from 'react'

export default function MobileMenu() {
    const [openMenu, setOpenMenu] = useState(false);
  return (
    <>
        <Drawer open={openMenu}
        onClose={()=>setOpenMenu(false)}>
            <List>
                <ListItemButton onClick={()=>setOpenMenu(false)}>
                    <ListItemIcon>
                        <ListItemText>HOME</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>ABOUT</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>CONTACT</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>WRITE</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>LOGIN</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
                <ListItemButton>
                    <ListItemIcon>
                        <ListItemText>REGISTER</ListItemText>
                    </ListItemIcon>
                </ListItemButton>
            </List>
        </Drawer>
        <IconButton sx={{color: "white", marginLeft: "auto"}} onClick={()=>setOpenMenu(!openMenu)}>
            <MenuIcon/>
        </IconButton>
    </>
  )
}
