import './characteristicsPointUrl.scss';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../utils/hooks';
import { ErrorTextInformer, SmallLoading } from '../../../utils/hoc';

export const CharacteristicsPointUrl = ({ urlHomeWorld }) => {
  const { data, loading, isValidApi } = useFetch(urlHomeWorld);
  const { name, url } = data;

  const idItem = url?.match(/\/(\d+)\/$/)[1];
  const arrUrl = url?.split('/');
  const category = arrUrl ? arrUrl[arrUrl.length - 3] : false;

  return (
    <SmallLoading data={loading}>
      <ErrorTextInformer isValidApi={isValidApi} title={name}>
        <Link
          className="characteristics-point lightsaber"
          to={`/${category}/${name?.toLowerCase().replace(/\s/g, '-')}`}
          state={{ idItem, category, titleText: name }}
        >
          <div className="characteristics-point__title">Homeworld:</div>
          <div className="characteristics-point__info ">{name}</div>
        </Link>
      </ErrorTextInformer>
    </SmallLoading>
  );
};