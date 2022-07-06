import styles from "../styles/pages/Blog.module.css";
import modelado from "../images/modelado.jpg";
import detrasDeEscena from "../images/detras_de_escena.jpg";
import arteConceptual from "../images/arte_conceptual.png";
import CardArticle from "../components/CardArticle";

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: "El arte de los videojuegos",
      content:
        "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. ",
      image: modelado,
    },
    {
      id: 2,
      title: "Detras de escena",
      content:
        "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      image: detrasDeEscena,
    },
    {
      id: 3,
      title: "Arte Conceptual",
      content:
        "es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen.",
      image: arteConceptual,
    },
  ];

  return (
    <div>
      <h1 className={`${styles.blogTitle} animate__animated animate__fadeIn`}>
        Blog
      </h1>
      <section
        className={`${styles.container_article} animate__animated
      animate__fadeInUpBig`}
      >
        {articles.map((article) => {
          return <CardArticle key={article.id} article={article} />;
        })}
      </section>
    </div>
  );
};

export default Blog;
