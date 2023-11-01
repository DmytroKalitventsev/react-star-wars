import './itemRelation.scss';
import { useValidationImg } from '../../../utils/hooks';
import { imageAPI } from '../../../utils/APIs';

export const ItemRelation = ({ relation, category }) => {
  const { name, title, url } = relation;
  const titleText = name ? name : title;

  const idItem = url.match(/\/(\d+)\/$/)[1];
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  return (
    <div className="item-relation">

      <div className="item-relation__img adaptive-img">
        <img
          src={isValidSrc}
          alt={name}
          onLoad={() => isError ? setIsError(false) : null}
        />
      </div>
      <div className="item-relation__name">{titleText}</div>

    </div>
  );
};