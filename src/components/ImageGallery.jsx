import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";
import { images } from "../helpers/imageBank.js";
import styles from "../styles/Gallery.module.css";

const ImageGallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);
  };

  return (
    <>
      {/* pasar las clases a modulo */}
      <div className={`${styles.model} ${model && `${styles.open}`}`}>
        <img src={tempImgSrc} />
        <FontAwesomeIcon
          icon={faRectangleXmark}
          onClick={() => setModel(false)}
        />
        ;
        <a href={tempImgSrc} download>
          descargar
        </a>
      </div>
      <div className={`${styles.gallery} `}>
        {images.map((item, index) => {
          return (
            <div
              className={`${styles.pics} animate__animated animate__fadeInUpBig`}
              key={item.id}
              onClick={() => getImg(item.imgSrc)}
            >
              <img
                src={item.imgSrc}
                alt={`wallpapers ${index}`}
                style={{ width: "100%" }}
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ImageGallery;
