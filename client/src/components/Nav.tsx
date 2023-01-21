import styles from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = () => {

  return(
    <nav className={styles.nav_container}>
      <Link to="/">
        <h2 className={styles.nav_logo}>WasteNot</h2>
      </Link>
    </nav>
  )

};

export default Nav;
