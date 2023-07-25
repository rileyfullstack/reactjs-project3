import { useState, useCallback, useMemo } from "react";
import useAxios from "../../hooks/useAxios";
import { login, signup } from "../services/usersApiService";
import {
  getUser,
  removeToken,
  setTokenInLocalStorage,
} from "../services/localStorageService";
import { useUser } from "../providers/UserProvider";
import { useNavigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import normalizeUser from "../helpers/normalization/normalizeUser";
import { useLogout } from "../../providers/LogoutMenuProvider";

const useUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { user, setUser, setToken } = useUser();

  useAxios();

  const requestStatus = useCallback(
    (loading, errorMessage, user) => {
      setLoading(loading);
      setUser(user);
      setError(errorMessage);
    },
    [setUser]
  );

  const handleLogin = useCallback(async (user) => {
    try {
      const token = await login(user);
      setTokenInLocalStorage(token); //works till here
      setToken(token);
      const userFromLocalStorage = getUser();
      requestStatus(false, null, userFromLocalStorage);
      navigate(ROUTES.CARDS);
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, []);

  const handleLogout = useCallback(() => {
    removeToken();
    setUser(null);
    navigate(ROUTES.ROOT);
  }, [setUser]);

  const value = useMemo(
    () => ({ isLoading, error, user }),
    [isLoading, error, user]
  );

  const handleSignup = useCallback(async (userFromTheClient) => {
    try{
      const normalizedUser = normalizeUser(userFromTheClient);
      await signup(normalizedUser);
      await handleLogin({
        email: userFromTheClient.email,
        password: userFromTheClient.password,
    });
    } catch (error) {
      requestStatus(false, error, null);
    }
  }, [normalizeUser, handleLogin, requestStatus]);

  return {
    value,
    handleLogin,
    handleLogout,
    handleSignup,
  };
};

export default useUsers;
