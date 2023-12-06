import { useState } from "react";
import cl from "./Carousel.module.css"

const Carousel = ({images}) => {

    const [selectedImage, setSelectedImage] = useState(0);

    const handleImageClick = (index) => {
      setSelectedImage(index);
    };
  
    return (
      <div className={cl.image__gallery}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Screenshot of a Personal Project`}
            className={index === selectedImage ? cl.selected : cl.unselected}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>
    );
};

export default Carousel;
