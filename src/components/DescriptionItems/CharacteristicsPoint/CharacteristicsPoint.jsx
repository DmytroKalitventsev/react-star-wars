import './characteristicsPoint.scss';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../utils/hooks';
import { ErrorTextInformer, SmallLoading } from '../../../utils/hoc';

export const CharacteristicsPoint = ({ title, info }) => {
  const checkUrl = info.slice(0, 8) === 'https://';
  const urlHomeworld = checkUrl ? info : '';

  const { data, loading, isValidApi } = useFetch(urlHomeworld);
  const { name, url } = data;

  const idItem = url?.match(/\/(\d+)\/$/)[1];
  const category = url?.slice(22, -3);
  const characteristicInfo = checkUrl ? name : info;

  return (
    <>
      {
        checkUrl
          ?
          <SmallLoading data={loading}>
            <ErrorTextInformer isValidApi={isValidApi} title={title}>
              <Link
                className="characteristics-point lightsaber"
                to={`/${category}/${characteristicInfo?.toLowerCase().replace(/\s/g, '-')}`}
                state={{ idItem, category, titleText: characteristicInfo }}
              >
                <div className="characteristics-point__title">{title}:</div>
                <div className="characteristics-point__info ">{characteristicInfo?.replace('n/a', 'unknown')}</div>
              </Link>
            </ErrorTextInformer>
          </SmallLoading>
          :
          <div className="characteristics-point">
            <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
            <div className="characteristics-point__info">{characteristicInfo?.replace('n/a', 'unknown')}</div>
          </div>
      }
    </>
  );
};