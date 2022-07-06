import styles from "../styles/Contacto.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const Contacto = () => {
  return (
    <div className={styles.container_contact}>
      <h3>Contacto: </h3>
      <a href="tel:+56957409074" className={styles.link_contact} title="Llamar">
        <FontAwesomeIcon icon={faPhone} /> +56 9 57409074
      </a>

      <a
        href="mailto:cpinopacheco64@gmail.com"
        className={styles.link_contact}
        title="Enviar E-mail"
      >
        <FontAwesomeIcon icon={faEnvelope} /> cpinopacheco64@gmail.com
      </a>

      <a
        href="https://api.whatsapp.com/send?phone=56957409074"
        target="_blank"
        title="Enviar mensaje"
        className={styles.link_contact}
      >
        <FontAwesomeIcon icon={faWhatsapp} /> Enviar mensaje WhatsApp
      </a>
    </div>
  );
};

export default Contacto;
