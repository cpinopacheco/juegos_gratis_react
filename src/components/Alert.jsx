import styles from "../styles/Alerta.module.css";

const Alert = ({ msg }) => {
  return (
    <div
      className={`${styles.container_alert} animate__animated animate__bounceIn`}
    >
      <h1>{msg}</h1>
    </div>
  );
};

export default Alert;
