import './characteristicsPointUrl.scss';
import { Link } from 'react-router-dom';
import { useGetItemDescriptionsQuery } from '../../../redux';
import { useGetParamsFromUrl } from '../../../utils/hooks';
import { ErrorTextInformer, SmallLoading } from '../../../utils/hoc';

export const CharacteristicsPointUrl = ({ urlHomeWorld }) => {
  const { id: itemId, category: categoryName } = useGetParamsFromUrl(urlHomeWorld);
  const { data: itemDescriptions, error, isFetching } = useGetItemDescriptionsQuery({ categoryName, itemId });
  const itemName = itemDescriptions?.name;

  return (
    <SmallLoading data={isFetching}>
      {/* <ErrorTextInformer isValidApi={isValidApi} title={itemName}>
        
      </ErrorTextInformer> */}
      <Link
        className="characteristics-point lightsaber"
        to={`/${categoryName}/${itemName?.toLowerCase().replace(/\s/g, '-')}`}
        state={{ itemId, categoryName, itemName }}
      >
        <div className="characteristics-point__title">Homeworld:</div>
        <div className="characteristics-point__info ">{itemName}</div>
      </Link>
    </SmallLoading>
  );
};