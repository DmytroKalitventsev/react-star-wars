import './descriptionsItems.scss';
import { useLocation } from 'react-router-dom';
import { useGetItemDescriptionsQuery } from '../../redux';
import { useNameReplace } from '../../utils/hooks';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { ItemCharacteristics, ItemsRelations } from '../../components';

export const DescriptionsItems = () => {
  const { state } = useLocation();
  const itemId = state?.itemId;
  const currentCategory = state?.categoryName;

  const [categoryName] = useNameReplace(currentCategory, 'characters', 'people');
  const { data: itemDescriptions, error, isFetching } = useGetItemDescriptionsQuery({ categoryName, itemId });

  return (
    <Loading data={isFetching}>
      <div className='descriptions-items'>

        <ItemCharacteristics
          itemDescriptions={itemDescriptions}
          itemId={itemId}
          currentCategory={currentCategory}
        />

        <ItemsRelations itemDescriptions={itemDescriptions} />

      </div>
    </Loading>
    // <ErrorProcessing isValidApi={isValidApi}>

    // </ErrorProcessing>
  );
};