import './imageItems.scss';
import { imageAPI } from '../../utils/APIs';
import { useValidationImg } from '../../utils/hooks';

export const ImageItems = ({ name, category, idItem }) => {
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  return (
    <div className="image-items adaptive-img">
      <img
        src={isValidSrc}
        alt={name}
        onLoad={() => isError ? setIsError(false) : null}
      />
    </div>
  );
};