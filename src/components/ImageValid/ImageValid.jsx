import './imageValid.scss';
import { useImageValidation } from '../../utils/hooks';

export const ImageValid = ({ itemName, categoryName, itemId }) => {
  const { isValidSrc, isError, setIsError } = useImageValidation(`https://starwars-visualguide.com/assets/img/${categoryName}/${itemId}.jpg`);

  return (
    <div className="image-valid adaptive-img">
      <img
        src={isValidSrc}
        alt={itemName}
        onLoad={() => isError ? setIsError(false) : null}
      />
    </div>
  );
};