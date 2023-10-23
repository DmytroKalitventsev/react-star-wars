import { useEffect, useState } from "react";

const useImg = (srcImage) => {
  const [isValidSrc, setIsValidSrc] = useState(srcImage);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const image = new Image();
    image.src = srcImage;
    image.onload = () => setIsError(false);
    image.onerror = () => {
      setIsError(true);
      setIsValidSrc('/img/image-not-found.jpg');
    };
  }, []);

  return { isValidSrc, isError, setIsError };
}

export default useImg;