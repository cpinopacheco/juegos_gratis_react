import styles from "../styles/CardArticle.module.css";

const CardArticle = ({ article }) => {
  const { title, content, image } = article;

  return (
    <article className={`${styles.container_article} `}>
      <div className={styles.container_img}>
        <img src={image} alt={title} />
      </div>
      <div className={styles.container_content}>
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </article>
  );
};

export default CardArticle;
