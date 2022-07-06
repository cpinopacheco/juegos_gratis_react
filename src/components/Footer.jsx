import styles from "../styles/Footer.module.css";
import Contacto from "./Contact";
import SocialNetworks from "./SocialNetworks";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <Contacto />
        <SocialNetworks />
        <p>
          <small> &copy; Todos los Derechos Reservados</small>{" "}
        </p>
      </div>
    </div>
  );
};

export default Footer;
