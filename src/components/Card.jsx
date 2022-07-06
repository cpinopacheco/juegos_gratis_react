import styles from "../styles/Card.module.css";

const Card = ({ game }) => {
  const {
    title,
    developer,
    freetogame_profile_url,
    genre,
    platform,
    release_date,
    short_description,
    thumbnail,
  } = game;

  return (
    <div className={styles.card}>
      <img src={thumbnail} alt={title} className={styles.img} />
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.container_gender}>
        <p className={styles.genre}>{genre}</p>
      </div>
      <p>
        <span className={styles.short_description}>Descripción: </span>
        {short_description}
      </p>
      <p>
        <span className={styles.platform}>Disponible en: </span>
        {platform}
      </p>
      <p>
        <span className={styles.release_date}>Lanzamiento: </span>
        {release_date}
      </p>
      <p>
        <span className={styles.developer}>Desarrollador: </span>
        {developer}
      </p>

      <a
        href={freetogame_profile_url}
        target="_blank"
        rel="noopener noreferrer"
        className={styles.freetogame_profile_url}
      >
        Ver más
      </a>
    </div>
  );
};

export default Card;
