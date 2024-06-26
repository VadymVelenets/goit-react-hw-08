import { NavLink } from "react-router-dom";
import css from "./AuthNav.module.css";
import clsx from "clsx";

export default function AuthNav() {
  const isActive = ({ isActive }) => {
    return clsx(isActive && css.active);
  };

  return (
    <div className={css.div}>
      <NavLink className={isActive} to="/register">
        Register
      </NavLink>
      <NavLink className={isActive} to="/login">
        Log In
      </NavLink>
    </div>
  );
}
