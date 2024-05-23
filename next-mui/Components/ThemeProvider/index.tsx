"use client";
import React from "react";
import { theme } from "../Theme";
import { ThemeProvider } from "@emotion/react";

const MainThemeProvider = ({ children }:{children:any}) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default MainThemeProvider;
