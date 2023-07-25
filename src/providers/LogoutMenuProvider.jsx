import React, { createContext, useCallback, useContext, useState } from "react";
import LogoutDialog from "../users/components/LogoutDialog";
import useUsers from "../users/hooks/useUsers";

const LogoutContext = createContext();

export default function LogoutMenuProvider({ children }) {

    const [dialog, setDialog] = useState(false);
    const { onLogout } = useUsers();
    const setLogoutMenu = useCallback((isOpen) => {
        setDialog(isOpen);
    }, []);

  return (
    <>
      <LogoutContext.Provider value={{ setLogoutMenu }}>
      <LogoutDialog
        isDialogOpen={dialog}
        onChangeDialog={() => setDialog(false)}
        onLogout={onLogout}
      />
        {children}
      </LogoutContext.Provider>
    </>
  );
}

export const useLogout = () => {
    const context = useContext(LogoutContext);
    if (!context) throw Error("useLogout must be used within a LogoutMenuProvider");
    return context;
};