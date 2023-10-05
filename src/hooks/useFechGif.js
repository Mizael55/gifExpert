import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";

export const useFechGif = (category) => {

  const [imagenes, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getGifs(category).then((newValue) => setImages(newValue));
    setIsLoading(false);
  }, []);

  return {
    imagenes,
    isLoading,
  };
};
