import {createContext, useState, useContext} from "react";

const UserLoginContext = createContext({
  user: {},
  login: () => {},
});

export function UserLoginContextProvider({children}) {
  const [user, setUser] = useState(false);

  function login(user, e) {
    e.preventDefault();
    if (user.email === "smj_personal@hotmail.com" && user.password === "555") {
      setUser(user);
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
