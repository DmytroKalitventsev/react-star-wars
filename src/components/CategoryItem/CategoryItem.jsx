import { Link } from 'react-router-dom';
import useImg from '../../utils/hooks/useImg';
import { imageAPI } from '../../utils/APIs/imageAPI';
import './categoryItem.scss';

export const CategoryItem = ({ data, category }) => {
  const { name, title, url } = data;
  const idItem = url.match(/\/(\d+)\/$/)[1];
  const {isValidSrc, isError, setIsError} = useImg(`${imageAPI}/${category}/${idItem}.jpg`);
  const titleText = name ? name : title;

  return (
    <Link to={`/${titleText}`} className="category-item">
      <div className="category-item__img adaptive-img">
        <img
          src={isValidSrc}
          alt={titleText}
          onLoad={() => isError ? setIsError(false) : null}
        />
      </div>
      <div className="category-item__footer">
        <h2 className="category-item__title lightsaber">{titleText}</h2>
      </div>
    </Link>
  );
};