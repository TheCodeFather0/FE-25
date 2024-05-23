"use client";
import * as React from "react";
import MainAppBar from "./Appbar";
import Box from "@mui/material/Box";
import RenderMenu from "./RenderMenu";
import DrawerList from "./DrawerList";
import Drawer from "@mui/material/Drawer";
import RenderMobileMenu from "./RenderMobileMenu";

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => setAnchorEl(event.currentTarget);
  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);
  const menuId = "primary-search-account-menu";
  const mobileMenuId = "primary-search-account-menu-mobile";
  const [open, setOpen] = React.useState(false);
  const toggleDrawer = (newOpen: boolean) => () => setOpen(newOpen);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <MainAppBar
        menuId={menuId}
        mobileMenuId={mobileMenuId}
        toggleDrawer={toggleDrawer}
        setMobileMoreAnchorEl={setMobileMoreAnchorEl}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />

      <RenderMobileMenu
        mobileMenuId={mobileMenuId}
        isMobileMenuOpen={isMobileMenuOpen}
        mobileMoreAnchorEl={mobileMoreAnchorEl}
        handleMobileMenuClose={handleMobileMenuClose}
        handleProfileMenuOpen={handleProfileMenuOpen}
      />

      <RenderMenu
        anchorEl={anchorEl}
        setAnchorEl={setAnchorEl}
        menuId={menuId}
        handleMobileMenuClose={handleMobileMenuClose}
      />

      <Drawer open={open} onClose={toggleDrawer(false)}>
        <DrawerList toggleDrawer={toggleDrawer} />
      </Drawer>
    </Box>
  );
};
