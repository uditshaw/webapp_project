import React, { useState } from "react";
import Box from "@mui/material/Box";
import Cookies from "js-cookie";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, Paper, Avatar, TextField, Checkbox } from "@mui/material";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import FormControlLabel from "@mui/material/FormControlLabel";
import EmailIcon from "@mui/icons-material/Email";
import Link from "@mui/material/Link";
import { red } from "@mui/material/colors";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import Chip from "@mui/material/Chip";
const paperStyle = {
  padding: 20,
  height: "80vh",
  width: "60vh",
  margin: "20px auto",
};
const avatarStyle = { background: "#1bbd7e" };
const style1 = { marginTop: "10px" };

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    window.location.reload();
  };
  const [admin, setAdmin] = React.useState("no");
  const loginUser = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      window.alert("Login successful");
      handleClose();
      window.location.reload(false);
    }
  };
  const loginUserAdmin = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:8000/api/v1/users/loginAdmin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",

      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();

    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      handleClose();
      window.location.reload(false);
    }
  };
  const handleAdmin = () => {
    setAdmin("yes");
  };
  if (admin === "no") {
    return (
      <div>
        <Button
          variant="contained"
          style={{
            marginLeft: "40vw",
            height: "5vh",
            color: "black",
            background: "white",
          }}
          onClick={handleOpen}
        >
          Login
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Button onClick={handleClose} style={{ color: "black" }}>
                <CloseIcon></CloseIcon>
              </Button>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <AccountBoxIcon></AccountBoxIcon>
                </Avatar>
                <Typography>
                  {" "}
                  <h2 style={{ margin: "20px" }}>Sign In</h2>
                </Typography>
              </Grid>
              <Button variant="outlined" fullWidth onClick={handleAdmin}>
                Sign In As Admin
              </Button>
              <Divider variant="middle" style={{ marginTop: "50px" }}>
                <Chip label="OR" />
              </Divider>

              <TextField
                id="standard-basic"
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                style={{ marginTop: "20px" }}
                fullWidth
                required
              />
              <TextField
                id="standard-basic"
                variant="standard"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Enter Password"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                fullWidth
                required
                type="password"
              />

              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={loginUser}
              >
                Sign In
              </Button>
            </Paper>
          </Grid>
        </Modal>
      </div>
    );
  } else {
    return (
      <div>
        <Button
          variant="contained"
          style={{
            marginLeft: "9vh",
            height: "5vh",
            color: "black",
            background: "white",
          }}
          onClick={handleOpen}
        >
          Login
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Grid>
            <Paper elevation={10} style={paperStyle}>
              <Button onClick={handleClose} style={{ color: "black" }}>
                <CloseIcon></CloseIcon>
              </Button>
              <Grid align="center">
                <Avatar style={avatarStyle}>
                  <AccountBoxIcon></AccountBoxIcon>
                </Avatar>
                <Typography>
                  {" "}
                  <h2 style={{ margin: "20px" }}>Sign In</h2>
                </Typography>
              </Grid>

              <TextField
                id="standard-basic"
                variant="standard"
                label="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
                style={{ marginTop: "20px" }}
                fullWidth
                required
              />
              <TextField
                id="standard-basic"
                variant="standard"
                label="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder=" Enter Password"
                style={{ marginTop: "20px", marginBottom: "20px" }}
                fullWidth
                required
                type="password"
              />

              <Button
                variant="contained"
                color="success"
                fullWidth
                onClick={loginUserAdmin}
              >
                Sign In
              </Button>
            </Paper>
          </Grid>
        </Modal>
      </div>
    );
  }
}
