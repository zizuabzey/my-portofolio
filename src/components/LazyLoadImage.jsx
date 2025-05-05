import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const LazyImage = ({ src, alt, width, height, className }) => {
  return (
    <LazyLoadImage
      src={src}
      alt={alt}
      effect="blur"
      width={width}
      height={height}
      className={className}
      onError={(e) => (e.target.src = "https://via.placeholder.com/64")}
    />
  );
};

export default LazyImage;