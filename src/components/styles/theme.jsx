import { createTheme } from "@mui/material";

const theme = createTheme({
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: "1170px !important",
          width: "100%",
          padding: "0 15px",
        },
      },
    },
  },
});

export default theme;
