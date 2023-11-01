import './aboutSpecie.scss';
import { useLocation } from 'react-router-dom';
import { baseAPI, imageAPI } from '../../../utils/APIs';
import { useFetch, useValidationImg } from '../../../utils/hooks';
import { Loading } from '../../../utils/hoc';
import { CharacteristicsPoints } from '../../../components';

export const AboutSpecie = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  const { name, classification, designation, average_height, skin_colors, hair_colors, eye_colors, average_lifespan, homeworld, language, people, films } = data;

  return (
    <Loading data={loading}>
      <div className='about-item'>
        <div className='item-characteristics'>
          <div className="item-characteristics__img adaptive-img">
            <img
              src={isValidSrc}
              alt={name}
              onLoad={() => isError ? setIsError(false) : null}
            />
          </div>

          <CharacteristicsPoints data={data}/>

        </div>
        <div className='items-related'>
          <div className="items-related__item">
            <h2 className="items-related__item-title">Related Films</h2>
            <div className='items-related__list'>
              {
                films?.map(film => (
                  <div key={crypto.randomUUID()} className="item-related">
                    <div className="item-related__img adaptive-img">
                      <img
                        src={isValidSrc}
                        alt={name}
                        onLoad={() => isError ? setIsError(false) : null}
                      />
                    </div>
                    <div className="item-related__name">Episode V: The Empire Strikes Back</div>
                  </div>
                ))
              }
            </div>
          </div>
          <div className="items-related__item">
            <h2 className="items-related__item-title">Related Characters</h2>
            <div className='items-related__list'>
              {
                people?.map(film => (
                  <div key={crypto.randomUUID()} className="item-related">
                    <div className="item-related__img adaptive-img">
                      <img
                        src={isValidSrc}
                        alt={name}
                        onLoad={() => isError ? setIsError(false) : null}
                      />
                    </div>
                    <div className="item-related__name">Episode V: The Empire Strikes Back</div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </Loading>
  );
};