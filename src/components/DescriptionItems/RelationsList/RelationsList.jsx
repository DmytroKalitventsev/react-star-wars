import './relationsList.scss';
import { usePromiseAll } from '../../../utils/hooks';
import { ErrorTextInformer, Loading } from '../../../utils/hoc';
import { ItemRelation } from '../ItemRelation/ItemRelation';

export const RelationsList = ({ urls, initialCategory }) => {
  const { data: itemDescriptions, loading, isValidApi } = usePromiseAll(urls);

  return (
    <Loading data={loading}>
      <ErrorTextInformer isValidApi={isValidApi}>
        {
          itemDescriptions.length
            ?
            <div className='relations-list'>
              {
                itemDescriptions?.map(relation => (
                  <ItemRelation
                    relation={relation}
                    initialCategory={initialCategory}
                    key={crypto.randomUUID()}
                  />
                ))
              }
            </div>
            :
            <div className='relations-list__validation'>There are no related items for this category</div>
        }
      </ErrorTextInformer>
    </Loading>

  );
};