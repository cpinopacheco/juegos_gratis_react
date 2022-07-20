import IframeYouTube from "../components/IframeYouTube";
import styles from "../styles/pages/MiCanal.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleRight } from "@fortawesome/free-solid-svg-icons";

const MiCanal = () => {
  const videos = [
    {
      url: "https://www.youtube.com/embed/r5rl3p6SBmY?start=690",
      title: "The Last Of Us - Part 2",
    },
    {
      url: "https://www.youtube.com/embed/oTj03lf1vcc",
      title: "Forza Horizon 5",
    },
    {
      url: "https://www.youtube.com/embed/LmXMTSh-IA0?start=360",
      title: "God of War",
    },
    {
      url: "https://www.youtube.com/embed/IXSoJnvKY7U?start=1095",
      title: "Ryse Son of Rome",
    },
    {
      url: "https://www.youtube.com/embed/vSb_6GO6oT8?start=1",
      title: "Gears of War 4",
    },
    {
      url: "https://www.youtube.com/embed/qfIemRv2VFs?start=74",
      title: "Marvel's Avengers",
    },
  ];

  return (
    <div
      className="animate__animated
        animate__fadeIn"
    >
      <h1 className={styles.my_channel_title}>Canal de YouTube</h1>

      <p className={styles.paragraph}>
        En mi canal de <span>YouTube</span> podrás encontrar mucho mas contenido
        y escenas épicas de diferentes videojuegos como las que te muestro a
        continuación. Dicho canal se creo con la finalidad de capturar momentos
        y escenas espectaculares que nos brinda el mundo gaming.
      </p>

      <div className={styles.container_button}>
        <a
          href="https://www.youtube.com/channel/UCSLZekzlxGUuBsj0yrCsIRw"
          className={styles.visit_channel_button}
          target="_blank"
        >
          Visitar Canal
          <FontAwesomeIcon icon={faCircleRight} />
        </a>
      </div>

      <div
        className={`${styles.container_videos} animate__animated
      animate__fadeIn animate__delay-2s`}
      >
        {videos.map((video, index) => (
          <IframeYouTube key={index} url={video.url} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default MiCanal;
