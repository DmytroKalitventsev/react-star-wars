import './categoryItem.scss';
import { Link, useLocation } from 'react-router-dom';
import { ImageItems } from '../ImageItems/ImageItems';

export const CategoryItem = ({ data }) => {
  const { state } = useLocation();
  const category = state?.category;

  const { name, title, url } = data;
  const idItem = url.match(/\/(\d+)\/$/)[1];
  const titleText = name ? name : title;

  return (
    <Link
      className="category-item"
      to={`${titleText.toLowerCase().replace(/\s/g, '-')}`}
      state={{ idItem, category, titleText }}
    >

      <ImageItems
        name={titleText}
        category={category}
        idItem={idItem}
      />

      <div className="category-item__footer">
        <h2 className="category-item__title lightsaber">{titleText}</h2>
      </div>
    </Link>
  );
};