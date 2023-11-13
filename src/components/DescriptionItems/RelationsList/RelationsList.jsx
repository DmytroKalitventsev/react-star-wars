import './relationsList.scss';
import { ItemRelation } from '../ItemRelation/ItemRelation';

export const RelationsList = ({ itemsUrls }) => {
  return (
    <>
      {
        itemsUrls.length
          ?
          <div className='relations-list'>
            {
              itemsUrls?.map(itemUrl => (
                <ItemRelation
                  itemUrl={itemUrl}
                  key={crypto.randomUUID()}
                />
              ))
            }
          </div>
          :
          <div className='relations-list__validation'>There are no related items for this category</div>
      }
    </>
  );
};