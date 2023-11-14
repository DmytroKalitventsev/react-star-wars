import './itemRelation.scss';
import { Link } from 'react-router-dom';
import { useGetItemDescriptionsQuery } from '../../../redux';
import { useGetParamsFromUrl } from '../../../utils/hooks';
import { SmallLoading } from '../../../utils/hoc';
import { ImageValid } from '../../ImageValid/ImageValid';

export const ItemRelation = ({ itemUrl }) => {
  const { category: categoryName, id: itemId } = useGetParamsFromUrl(itemUrl);

  const { data: itemDescriptions, error, isFetching } = useGetItemDescriptionsQuery({ categoryName, itemId });

  const itemName = itemDescriptions?.name ?? itemDescriptions?.title;

  return (
    error
      ?
      <div className="item-relation item-relation_error" >
        <div className='item-relation__img adaptive-img'>
          <img src="./img/image-not-found.png" alt="not found" />
        </div>
        <div className="item-relation__name">This relation was an error. Please try again later.</div>
      </div>
      :
      <SmallLoading data={isFetching}>
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
      </SmallLoading>
  );
};