import styles from "../styles/SocialNetworks.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons"; //importa iconos de redes sociales es distinto a los otros iconos

const SocialNetworks = () => {
  return (
    <div className={styles.container}>
      <h3>Redes Sociales: </h3>
      <div className={styles.buttons_wrapper}>
        <a
          href="https://www.facebook.com/cristian.pacheco.374"
          title="Visitar Facebook"
          target="_blank"
        >
          <FontAwesomeIcon icon={faFacebook} className={styles.icon_facebook} />
        </a>
        <a
          href="https://www.linkedin.com/in/cristian-pino-pacheco"
          title="Visitar LinkedIn"
          target="_blank"
        >
          <FontAwesomeIcon icon={faLinkedin} className={styles.icon_linkedin} />
        </a>
        <a
          href="https://www.instagram.com/cristianapp87"
          title="Visitar Instragram"
          target="_blank"
        >
          <FontAwesomeIcon
            icon={faInstagram}
            className={styles.icon_instragram}
          />
        </a>
      </div>
    </div>
  );
};

export default SocialNetworks;
