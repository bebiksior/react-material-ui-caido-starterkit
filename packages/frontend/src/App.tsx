import React from "react";
import { caidoTheme } from "caido-mui-theme";
import { ThemeProvider } from "@mui/material/styles";

const App = () => {
  return (
    <ThemeProvider theme={caidoTheme}>
      {/* Your app components */}
    </ThemeProvider>
  );
};
