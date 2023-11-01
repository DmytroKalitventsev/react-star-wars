import './characteristicsPoint.scss';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../utils/hooks';

export const CharacteristicsPoint = ({ title, info }) => {
  const checkTitle = title === 'homeworld';
  const urlHomeworld = checkTitle ? info : '';
  const { data, loading, isValidApi } = useFetch(urlHomeworld);
  const { name, url } = data;
  const idItem = url?.match(/\/(\d+)\/$/)[1];
  const category = url?.slice(22, -3);
  const characteristicInfo = checkTitle ? name : info;

  return (
    <>
      {
        checkTitle
          ?
          <>
            {
              loading
              ? 'Loading...'
              :
              <Link
                className="characteristics-point lightsaber"
                to={`/${category}/${characteristicInfo?.toLowerCase().replace(/\s/g, '-')}`}
                state={{ idItem, category, titleText: characteristicInfo }}
              >
                <div className="characteristics-point__title">{title}:</div>
                <div className="characteristics-point__info ">{characteristicInfo?.replace('n/a', 'unknown')}</div>
              </Link>
            }
          </>
          :
          <div className="characteristics-point">
            <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
            <div className="characteristics-point__info">{characteristicInfo?.replace('n/a', 'unknown')}</div>
          </div>
      }
    </>
  );
};