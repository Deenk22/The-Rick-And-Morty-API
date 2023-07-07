import { Navigate, Outlet } from "react-router-dom";
import { useUserLoginContext } from "../context/UserLoginContext";

export default function PrivateRoute() {
  const { user } = useUserLoginContext();
  if (!user) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Outlet />
    </div>
  );
}
