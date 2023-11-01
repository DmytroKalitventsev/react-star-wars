import './itemRelation.scss';
import { ImageItems } from '../../ImageItems/ImageItems';

export const ItemRelation = ({ relation, category }) => {
  const { name, title, url } = relation;
  const titleText = name ? name : title;
  const idItem = url.match(/\/(\d+)\/$/)[1];

  return (
    <div className="item-relation">
      
      <ImageItems
        name={titleText}
        category={category}
        idItem={idItem}
      />

      <div className="item-relation__name">{titleText}</div>
    </div>
  );
};