import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRectangleXmark } from "@fortawesome/free-solid-svg-icons";

import styles from "../styles/Gallery.module.css";
/* images */
import img1 from "../images/img_wallpapers/Nathan_Drake.jpg";
import img2 from "../images/img_wallpapers/RE3_Remake.jpg";
import img3 from "../images/img_wallpapers/RE3_Remake_1.jpg";
import img4 from "../images/img_wallpapers/Elden_Ring_2.jpg";
import img5 from "../images/img_wallpapers/GOW_1.jpg";
import img6 from "../images/img_wallpapers/Tlou_2.jpg";
import img7 from "../images/img_wallpapers/Halo.jpg";
import img8 from "../images/img_wallpapers/Horizon_zero_dawn_1.jpg";
import img9 from "../images/img_wallpapers/Scorpio.jpg";
import img10 from "../images/img_wallpapers/Horizon_zero_dawn.jpg";
import img11 from "../images/img_wallpapers/Ryu.jpg";
import img12 from "../images/img_wallpapers/Spiderman.jpg";
import img13 from "../images/img_wallpapers/Elden_Ring_1.png";
import img14 from "../images/img_wallpapers/Horizon_zero_dawn_2.jpg";
import img15 from "../images/img_wallpapers/Sonic.png";
import img16 from "../images/img_wallpapers/Days_Gone.jpg";
import img17 from "../images/img_wallpapers/SubZero.jpg";
import img18 from "../images/img_wallpapers/RE2.png";
import img19 from "../images/img_wallpapers/the_division_2.jpg";
import img20 from "../images/img_wallpapers/The_witcher.jpg";
import img21 from "../images/img_wallpapers/GOW.jpg";
import img22 from "../images/img_wallpapers/TR_1.jpg";
import img23 from "../images/img_wallpapers/TR_2.jpg";
import img24 from "../images/img_wallpapers/Super_mario.jpg";
import img25 from "../images/img_wallpapers/Ghost_of_Tsushima.jpg";
import img26 from "../images/img_wallpapers/Nier.jpg";
import img27 from "../images/img_wallpapers/Nier_2.jpg";
import img28 from "../images/img_wallpapers/CyberPunk.png";
import img29 from "../images/img_wallpapers/FH5.jpg";
import img30 from "../images/img_wallpapers/Chun_li_2.jpg";

const ImageGallery = () => {
  const [model, setModel] = useState(false);
  const [tempImgSrc, setTempImgSrc] = useState("");

  let images = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: img4,
    },
    {
      id: 5,
      imgSrc: img5,
    },
    {
      id: 6,
      imgSrc: img6,
    },
    {
      id: 7,
      imgSrc: img7,
    },
    {
      id: 8,
      imgSrc: img8,
    },
    {
      id: 9,
      imgSrc: img9,
    },
    {
      id: 10,
      imgSrc: img10,
    },
    {
      id: 11,
      imgSrc: img11,
    },
    {
      id: 12,
      imgSrc: img12,
    },
    {
      id: 13,
      imgSrc: img13,
    },
    {
      id: 14,
      imgSrc: img14,
    },
    {
      id: 15,
      imgSrc: img15,
    },
    {
      id: 16,
      imgSrc: img16,
    },
    {
      id: 17,
      imgSrc: img17,
    },
    {
      id: 18,
      imgSrc: img18,
    },
    {
      id: 19,
      imgSrc: img19,
    },
    {
      id: 20,
      imgSrc: img20,
    },
    {
      id: 21,
      imgSrc: img21,
    },
    {
      id: 22,
      imgSrc: img22,
    },
    {
      id: 23,
      imgSrc: img23,
    },
    {
      id: 24,
      imgSrc: img24,
    },
    {
      id: 25,
      imgSrc: img25,
    },
    {
      id: 26,
      imgSrc: img26,
    },
    {
      id: 27,
      imgSrc: img27,
    },
    {
      id: 28,
      imgSrc: img28,
    },
    {
      id: 29,
      imgSrc: img29,
    },
    {
      id: 30,
      imgSrc: img30,
    },
  ];

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
