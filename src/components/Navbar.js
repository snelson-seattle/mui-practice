import { useState, useRef } from "react";

import {
  AppBar,
  Toolbar,
  styled,
  Typography,
  Box,
  InputBase,
  Badge,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import { Code, Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const SearchBox = styled("div")(({ theme }) => ({
  backgroundColor: "white",
  padding: "0 10px",
  borderRadius: theme.shape.borderRadius,
  width: "40%",
}));

const IconBox = styled(Box)(({ theme }) => ({
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));

const UserBox = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));

const MenuPopover = ({ anchorEl, onClose, menuOpen }) => {
  return (
    <Menu
      open={menuOpen}
      onClose={onClose}
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
    >
      <MenuItem>Profile</MenuItem>
      <MenuItem>Account</MenuItem>
      <MenuItem>Logout</MenuItem>
    </Menu>
  );
};

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setMenuOpen(true);
  }

  const handleClose = (e) => {
    setAnchorEl(null);
    setMenuOpen(false);
  } 

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Code sx={{ display: { xs: "block", sm: "none" } }} />
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUI 5 Practice
        </Typography>
        <SearchBox>
          <InputBase placeholder="search..." />
        </SearchBox>
        <IconBox>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={2} color="error">
            <Notifications />
          </Badge>
          <Avatar sx={{ width: 30, height: 30 }} src="" onClick={handleClick} />
        </IconBox>
        <UserBox onClick={handleClick}>
          <Avatar sx={{ width: 30, height: 30 }} src="" />
          <Typography variant="span">Scott</Typography>
        </UserBox>
      </StyledToolbar>
      <MenuPopover anchorEl={anchorEl} menuOpen={menuOpen} onClose={handleClose} />
    </AppBar>
  );
};
export default Navbar;
