import './itemRelation.scss';
import { Link } from 'react-router-dom';
import { ImageItems } from '../../ImageItems/ImageItems';

export const ItemRelation = ({ relation, category }) => {
  const { name, title, url } = relation;
  const titleText = name ? name : title;
  const idItem = url.match(/\/(\d+)\/$/)[1];
  const categoryItem = category === 'people' || category === 'pilots' || category === 'residents' ? 'characters' : category;

  return (
    <Link
      className="item-relation"
      to={`/${categoryItem}/${titleText.toLowerCase().replace(/\s/g, '-')}`}
      state={{ idItem, category: categoryItem, titleText }}
    >

      <ImageItems
        name={titleText}
        category={categoryItem}
        idItem={idItem}
      />

      <div className="item-relation__name">{titleText}</div>
    </Link>
  );
};