"use client";
import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Badge,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";

import CategoryIcon from "@mui/icons-material/Category";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import AuthContext from "@/context/AuthContext";
import { useSession, signOut } from "next-auth/react";
import CartContext from "@/context/CartContext";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const { data } = useSession();
  const { cart } = useContext(CartContext);
  const cartItems = cart?.cartItems;

  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isXs = useMediaQuery(theme.breakpoints.down("xs"));
  const isSm = useMediaQuery(theme.breakpoints.between("xs", "sm", "md"));
  const isLg = useMediaQuery(theme.breakpoints.up("lg"));

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setDrawerOpen(open);
  };

  const handleLogout = async () => {
    await signOut();
  };

  useEffect(() => {
    if (data) {
      setUser(data?.user);
    }
  }, [data]);

  const navItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Products", icon: <CategoryIcon />, path: "/all-products" },
    { text: "Login", icon: <LoginIcon />, path: "/login" },
  ];

  return (
    <>
      <AppBar position="static" color={"primary"}>
        <Toolbar>
          {isXs || isSm ? (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <>
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                <Link href={"/"}>TechTrove</Link>
              </Typography>
              <List
                component="nav"
                aria-labelledby="main navigation"
                sx={{ display: isLg ? "flex" : "none" }}
              >
                {navItems.map((item) => (
                  <Link href={item.path} key={item.text}>
                    <ListItem button component="a">
                      <ListItemIcon>{item.icon}</ListItemIcon>
                      <ListItemText primary={item.text} />
                    </ListItem>
                  </Link>
                ))}
              </List>

              {(isSm || !user) && (
                <Link href="/login">
                  <Button color="inherit">
                    <LoginIcon />
                    Login
                  </Button>
                </Link>
              )}
              {user && (
                <Button color="inherit" onClick={handleLogout}>
                  <LogoutIcon />
                  Logout
                </Button>
              )}
              {user && (
                <Link href="/me">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={
                      user?.avatar ? user?.avatar?.url : "/images/default.png"
                    }
                  />
                </Link>
              )}
            </>
          )}
          <Link href={"/cart"}>
            <IconButton color="inherit">
              <Badge badgeContent={cartItems?.length || 0} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="left"
        open={drawerOpen}
        onClose={toggleDrawer(false)}
        variant={isLg ? "permanent" : "temporary"}
        sx={{ display: isXs || isSm ? "block" : "none" }}
      >
        <div
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <List>
            {navItems.map((item) => (
              <Link href={item.path} key={item.text}>
                <ListItem button component="a">
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItem>
              </Link>
            ))}
          </List>
        </div>
      </Drawer>
    </>
  );
};

export default Navbar;
