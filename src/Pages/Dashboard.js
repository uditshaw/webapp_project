import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Cookies from 'js-cookie';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
export default function Dashboard() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout=()=>{
    Cookies.remove('jwtoken');
    handleClose();
    window.location.reload(false)
  }
  return (
    <div>
      <Button
      upperCase
        onClick={handleClick}
        style={{marginLeft:"100vh",textTransform:"none",color:"white"}}
      >
        <pre >Welcome Back  {Cookies.get('name')}</pre>  
        <KeyboardArrowDownIcon style={{marginTop:"5px"}}></KeyboardArrowDownIcon>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </div>
  );
}
