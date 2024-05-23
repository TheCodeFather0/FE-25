import React from "react";
import { Menu, MenuItem } from "@mui/material";

interface IProps {
  anchorEl: any;
  setAnchorEl: any;
  menuId: any;
  handleMobileMenuClose: any;
}

const RenderMenu = ({
  anchorEl,
  setAnchorEl,
  menuId,
  handleMobileMenuClose,
}: IProps) => {
  const isMenuOpen = Boolean(anchorEl);

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  return (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );
};

export default RenderMenu;
