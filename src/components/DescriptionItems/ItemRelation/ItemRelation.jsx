import './itemRelation.scss';
import { Link } from 'react-router-dom';
import { ImageValid } from '../../ImageValid/ImageValid';
import { useGetParamsFromUrl } from '../../../utils/hooks';

export const ItemRelation = ({ relation, initialCategory }) => {
  const { name, title, url } = relation;

  const itemName = name ?? title;
  const { id: itemId } = useGetParamsFromUrl(url);
  const categoryName = initialCategory === 'people' || initialCategory === 'pilots' || initialCategory === 'residents' ? 'characters' : initialCategory;

  return (
    <Link
      className="item-relation"
      to={`/${categoryName}/${itemName?.toLowerCase().replace(/\s/g, '-')}`}
      state={{ itemId, categoryName, itemName }}
    >

      <ImageValid
        itemName={itemName}
        categoryName={categoryName}
        itemId={itemId}
      />

      <div className="item-relation__name">{itemName}</div>
    </Link>
  );
};