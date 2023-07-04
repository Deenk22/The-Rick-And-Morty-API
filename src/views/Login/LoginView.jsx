import {useState} from "react";
import {useUserLoginContext} from "../../context/UserLoginContext";

export default function LoginView() {
  const {login} = useUserLoginContext();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  function handleForm(e) {
    setUser((user) => ({...user, [e.target.name]: e.target.value}));
  }
  console.log(user);

  return (
    <div className="form-login">
      <h1>The Rick and Morty Login</h1>
      <form onSubmit={(e) => login(user, e)}>
        <label htmlFor="email">
          <input
            type="email"
            value={user.email}
            name="email"
            onChange={handleForm}
            placeholder="Your email here"
          />
        </label>
        <label htmlFor="password">
          <input
            type="password"
            value={user.password}
            name="password"
            onChange={handleForm}
            placeholder="Your password here"
          />
        </label>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
