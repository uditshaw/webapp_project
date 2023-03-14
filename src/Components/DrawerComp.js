import React, { useState } from 'react'
import {Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
const DrawerComp=()=>{
    const[open,setOpen]=useState(false)
    const Pages=["Home","Events","About US","Login","SingUp"]
    return(
        <div>
                <IconButton sx={{color:'white', marginLeft:"auto"}}onClick={()=>setOpen(!open)}>
            <MenuIcon></MenuIcon>
        </IconButton>
        <Drawer open={open} onClose={()=>setOpen(false)}> 
<List>
    {
        Pages.map((page,index)=>(
            <ListItemButton key={index}>
            <ListItemIcon>
                <ListItemText>{page}</ListItemText>
            </ListItemIcon>
        </ListItemButton>
        ))
    }

</List>
        </Drawer>
    
        </div>
    )
}
export default DrawerComp;