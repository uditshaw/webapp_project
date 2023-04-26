import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
export default function EditStatus(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [status,setStatus]=React.useState(props.data.status);

const handleEdit=(event)=>{
    var d=event.target.innerText
setStatus(d);
    let data = fetch(`http://localhost:8000/api/v1/events/edit`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify({query:{_id:props.data._id},param:{status:d}})
      })
      handleClose();

}
  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        {status}<ArrowDownwardIcon></ArrowDownwardIcon>
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
        <MenuItem onClick={handleEdit} value="Ongoing">Ongoing</MenuItem>
        <MenuItem onClick={handleEdit} value="Upcoming">Upcoming</MenuItem>
        <MenuItem onClick={handleEdit} value="Past">Past</MenuItem>
      </Menu>
    </div>
  );
}
