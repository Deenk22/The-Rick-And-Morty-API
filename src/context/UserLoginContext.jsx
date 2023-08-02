import {createContext, useState, useContext} from "react";
import jwtDecode from "jwt-decode";

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
    JSON.parse(localStorage.getItem(RICK_MORTY_KEY)) ?? null
  );

  async function login({email, password}) {
    try {
      const response = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({email: email, password: password}),
      });
      console.log(response);
      if (response.ok) {
        const token = await response.json();
        const user = jwtDecode(token.jwt);
        setUser(user);
        localStorage.setItem(RICK_MORTY_KEY, JSON.stringify(user));
        setErrorMessage(null);
      } else {
        setErrorMessage("Entered incorrect values");
      }
    } catch (err) {
      throw new Error(err.message);
    }
  }

  // function login(user) {
  //   console.log(user);
  //   if (
  //     user.email === "rick_sanchez@gmail.com" &&
  //     user.password === "Santi555"
  //   ) {
  //     setUser(user);
  //     localStorage.setItem(RICK_MORTY_KEY, user.email);
  //     setErrorMessage(null);
  //   } else {
  //     setErrorMessage("Entered incorrect values");
  //   }
  // }

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
