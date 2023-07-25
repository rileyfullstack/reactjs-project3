import React, { createContext, useCallback, useContext, useState } from "react";
import { Alert, Snackbar } from "@mui/material";

const SnackbarContext = createContext();

export default function SnackbarProvider({ children }) {
  const [isSnackOpen, setOpenSnack] = useState(false);
  const [snackColor, setSnackColor] = useState("success");
  const [snackVariant, setSnackVariant] = useState("filled");
  const [snackMessage, setSnackMessage] = useState("in snackbar");

  const setSnack = useCallback((color, message, variant = "filled") => {
    setOpenSnack(true);
    setSnackColor(color);
    setSnackVariant(variant);
    setSnackMessage(message);
  }, []);

  return (
    <>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        open={isSnackOpen}
        onClose={() => setOpenSnack((prev) => !prev)}
        autoHideDuration={1000}
      >
        <Alert severity={snackColor} variant={snackVariant}>
          {snackMessage}
        </Alert>
      </Snackbar>
      
      <SnackbarContext.Provider value={{ setSnack }}>
        {children}
      </SnackbarContext.Provider>
    </>
  );
}

export const useSnack = () => {
    const context = useContext(SnackbarContext);
    if (!context) throw Error("useSnack must be used within a SnackBarProvider");
    return context;
};