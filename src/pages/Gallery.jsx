import ImageGallery from "../components/ImageGallery";
import styles from "../styles/pages/Galeria.module.css";

const Gallery = () => {
  return (
    <>
      <div className="animate__animated animate__fadeIn">
        <h1 className={styles.galeryTitle}>Galería</h1>
        <p>
          En esta sección podrás ver imágenes de algunos de los juegos y
          personajes mas iconicos del mundo gamer. Puedes seleccionar la imagen
          que mas te guste para que puedas ver una previsualización completa de
          la misma y tendrás la opción de poder descargarla para que la dejes de
          fondo de pantalla en tú teléfono.
        </p>
      </div>
      <ImageGallery />
    </>
  );
};

export default Gallery;
