import './relationsList.scss';
import { ItemRelation } from '../ItemRelation/ItemRelation';
import { Loading } from '../../../utils/hoc';
import { usePromiseAll } from '../../../utils/hooks';

export const RelationsList = ({ links, category }) => {
  const { data, loading, isValidApi } = usePromiseAll(links);

  return (
    <div className='relations-list'>

      <Loading data={loading}>
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
          <div>There are no related items for this category</div>
        }
      </Loading>

    </div>
  );
};