import './relationsList.scss';
import { ErrorTextInformer, Loading } from '../../../utils/hoc';
import { usePromiseAll } from '../../../utils/hooks';
import { ItemRelation } from '../ItemRelation/ItemRelation';

export const RelationsList = ({ links, category }) => {
  const { data, loading, isValidApi } = usePromiseAll(links);

  return (
    <div className='relations-list'>
      <Loading data={loading}>
        <ErrorTextInformer isValidApi={isValidApi}>
          {
            data.length
              ?
              data.map(relation => (
                <ItemRelation
                  relation={relation}
                  category={category}
                  key={crypto.randomUUID()}
                />
              ))
              :
              <div className='relations-list__validation'>There are no related items for this category</div>
          }
        </ErrorTextInformer>
      </Loading>
    </div>
  );
};