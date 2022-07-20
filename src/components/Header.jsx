import banner from "../images/banner_header.png"; //esto sirve para un recurso estático
import styles from "../styles/Header.module.css";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let navigate = useNavigate();

  const goToHome = () => {
    navigate("/", { replace: true });
  };

  return (
    <header className={styles.header} onClick={goToHome}>
      <img src={banner} alt="banner_img" className={styles.header_image} />

      <p className={styles.header_title}>Juegos Gratis</p>
    </header>
  );
};

export default Header;
