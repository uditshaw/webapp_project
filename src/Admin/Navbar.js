import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { height } from "@mui/system";
import Cookies from "js-cookie";

export default function Navbar() {
  const handleLogout = () => {
    Cookies.remove("jwtoken");
    Cookies.remove("Admin");
    // handleClose();
    window.location.reload(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Button onClick={handleLogout} style={{ backgroundColor: "white" }}>
            Log Out
          </Button>

          <Typography
            variant="h6"
            component="div"
            sx={{
              flexGrow: 1,
              marginLeft: "50%",
              marginTop: "5vh",
              fontSize: "40px",
              height: "10vh",
            }}
          >
            K-Event
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
