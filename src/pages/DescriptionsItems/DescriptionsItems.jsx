import './descriptionsItems.scss';
import { useLocation } from 'react-router-dom';
import { baseAPI } from '../../utils/APIs';
import { Loading } from '../../utils/hoc';
import { useFetch } from '../../utils/hooks';
import { ItemCharacteristics, ItemsRelations } from '../../components';

export const DescriptionsItems = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;

  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);

  return (
    <Loading data={loading}>
      <div className='descriptions-items'>

        <ItemCharacteristics
          data={data}
          idItem={idItem}
          category={category}
        />

        <ItemsRelations data={data} />

      </div>
    </Loading>
  );
};