import './itemRelation.scss';
import { Link } from 'react-router-dom';
import { ImageItems } from '../../ImageItems/ImageItems';

export const ItemRelation = ({ relation, category }) => {
  const { name, title, url } = relation;
  const titleText = name ? name : title;
  const idItem = url.match(/\/(\d+)\/$/)[1];

  return (
    <Link
      className="item-relation"
      to={`/${category}/${titleText.toLowerCase().replace(/\s/g, '-')}`}
      state={{ idItem, category, titleText }}
    >

      <ImageItems
        name={titleText}
        category={category}
        idItem={idItem}
      />

      <div className="item-relation__name">{titleText}</div>
    </Link>
  );
};