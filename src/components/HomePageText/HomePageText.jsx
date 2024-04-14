import { useSelector } from "react-redux";
import css from "./HomePageText.module.css";
import { selectIsLoggedIn, selectUser } from "../../redux/auth/selectors";

export default function HomePageText() {
  const user = useSelector(selectUser);
  const isLoginned = useSelector(selectIsLoggedIn);
  return (
    <div className={css.text}>
      <p>
        Hello, {isLoginned ? <span className={css.textAccent}>{user.name}</span> : <>user</>} ! Our contacts app is a
        simple and effective tool to manage all your contacts in one place. Easily add, edit, and delete contacts, and
        quickly find the contact you need using search and filter functions.
        <br />
        {isLoginned && <span className={css.textAccent}>Enjoy your use!</span>}
      </p>
    </div>
  );
}
