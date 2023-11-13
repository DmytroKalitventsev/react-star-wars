import { useEffect, useState } from "react";

export const useImageValidation = (srcImage) => {
  const [isValidSrc, setIsValidSrc] = useState(srcImage);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = srcImage;
    image.onload = () => setIsError(false);
    image.onerror = () => {
      setIsError(true);
      setIsValidSrc('./img/image-not-found.png');
    };
  }, [srcImage]);

  return { isValidSrc, isError, setIsError };
}