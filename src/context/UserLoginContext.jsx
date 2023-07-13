import {createContext, useState, useContext} from "react";

const UserLoginContext = createContext({
  user: {},
  errorMessage: null,
  login: () => {},
  logout: () => {},
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY";

export function UserLoginContextProvider({children}) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [user, setUser] = useState(
    localStorage.getItem(RICK_MORTY_KEY ?? null)
  );

  function login(user) {
    console.log(user);
    if (
      user.email === "rick_sanchez@gmail.com" &&
      user.password === "Santi555"
    ) {
      setUser(user);
      localStorage.setItem(RICK_MORTY_KEY, user.email);
      setErrorMessage(null);
    } else {
      setErrorMessage("Entered incorrect values");
    }
  }

  function logout() {
    localStorage.removeItem(RICK_MORTY_KEY);
    setUser(null);
  }

  const valueProvide = {
    user,
    errorMessage,
    login,
    logout,
  };

  return (
    <UserLoginContext.Provider value={valueProvide}>
      {children}
    </UserLoginContext.Provider>
  );
}

export function useUserLoginContext() {
  return useContext(UserLoginContext);
}
