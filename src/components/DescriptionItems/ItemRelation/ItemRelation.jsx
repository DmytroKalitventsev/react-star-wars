import './itemRelation.scss';
import { Link } from 'react-router-dom';
import { ImageValid } from '../../ImageValid/ImageValid';
import { useGetParamsFromUrl } from '../../../utils/hooks';
import { useGetItemDescriptionsQuery } from '../../../redux';
import { Loading } from '../../../utils/hoc';
import { useEffect, useState } from 'react';

export const ItemRelation = ({ itemUrl }) => {
  const [data, setData] = useState([]);
  const { category: categoryName, id: itemId } = useGetParamsFromUrl(itemUrl);

  const { data: itemDescriptions, error, isFetching } = useGetItemDescriptionsQuery({ categoryName, itemId });

  const itemName = itemDescriptions?.name ?? itemDescriptions?.title;
  
  return (
    <Loading data={isFetching}>
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
    </Loading>
  );
};