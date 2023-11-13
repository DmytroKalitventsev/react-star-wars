import './categoryItem.scss';
import { Link } from 'react-router-dom';
import { useGetParamsFromUrl, useNameReplace } from '../../utils/hooks';
import { ImageValid } from '../ImageValid/ImageValid';

export const CategoryItem = ({ itemData }) => {
  const { name, title, url } = itemData;

  const { id: itemId, category: currentCategory } = useGetParamsFromUrl(url);
  const [categoryName] = useNameReplace(currentCategory, 'people', 'characters');
  const itemName = name ?? title;

  return (
    <Link
      className="category-item"
      to={`${itemName?.toLowerCase().replace(/\s/g, '-')}`}
      state={{ itemId, categoryName, itemName }}
    >

      <ImageValid
        itemName={itemName}
        categoryName={categoryName}
        itemId={itemId}
      />

      <div className="category-item__footer">
        <h2 className="category-item__title lightsaber">{itemName}</h2>
      </div>
    </Link>
  );
};