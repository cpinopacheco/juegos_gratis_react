import styles from "../styles/ScrollTopButton.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

const ScrollTopButton = () => {
  //Hace el scroll al top de la app
  const scrollTop = () => {
    window.scrollTo({
      behavior: "smooth",
      top: 0,
    });
  };

  return (
    <button
      id="scroll-top-button"
      className={`${styles.scroll_top_btn} animate__animated animate__fadeInUp`}
      onClick={() => scrollTop()}
    >
      <FontAwesomeIcon icon={faArrowUp} />
    </button>
  );
};

export default ScrollTopButton;
