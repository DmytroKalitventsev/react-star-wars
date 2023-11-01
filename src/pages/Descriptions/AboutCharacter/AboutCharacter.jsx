import './aboutCharacter.scss';
import { useLocation } from 'react-router-dom';
import { baseAPI, imageAPI } from '../../../utils/APIs';
import { useFetch, useValidationImg } from '../../../utils/hooks';
import { Loading } from '../../../utils/hoc';
import { CharacteristicsPoints, ItemsRelations } from '../../../components';

export const AboutCharacter = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  return (
    <Loading data={loading}>
      <div className='about-item'>
        <div className='item-characteristics'>
          <div className="item-characteristics__img adaptive-img">
            <img
              src={isValidSrc}
              alt={data.name}
              onLoad={() => isError ? setIsError(false) : null}
            />
          </div>

          <CharacteristicsPoints data={data} />

        </div>

        <ItemsRelations data={data} />

      </div>
    </Loading>
  );
};