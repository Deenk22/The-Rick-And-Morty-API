import {createContext, useState, useContext} from "react";

const UserLoginContext = createContext({
  user: {},
  login: () => {},
});

const RICK_MORTY_KEY = "RICK_MORTY_KEY";

export function UserLoginContextProvider({children}) {
  const [user, setUser] = useState(
    localStorage.getItem(RICK_MORTY_KEY ?? null)
  );

  function login(user) {
    console.log(user);
    if (
      user.email === "smj_personal@hotmail.com" &&
      user.password === "Santi555"
    ) {
      setUser(user);
      localStorage.setItem(RICK_MORTY_KEY, user.email);
    } else {
      console.log("Contraseña Incorrecta");
    }
  }

  const valueProvide = {
    user,
    login,
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
