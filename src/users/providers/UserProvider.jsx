import React, { useMemo, useContext, createContext, useState, useEffect } from 'react';
import { getToken, getUser } from '../services/localStorageService';
import { node } from 'prop-types';

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(getToken());

  useEffect(() => {
    if (!user) {
      const userFromLocalStorage = getUser();
      setUser(userFromLocalStorage);
    }
  }, [user]);

  const provideUser = useMemo(() => ({
    user,
    setUser,
    token,
    setToken,
  }), [user, token]);

  return (
    <UserContext.Provider value={provideUser}>
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) throw Error("useUser must be used within a UserProvider");
  return context;
};

UserProvider.propTypes = {
  children: node.isRequired,
};
