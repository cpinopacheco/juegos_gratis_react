import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="/">Inicio</Link>
      <Link to="blog">Blog</Link>
      <Link to="galeria">Galería</Link>
      <Link to="canal">Canal</Link>
    </nav>
  );
};

export default NavBar;
