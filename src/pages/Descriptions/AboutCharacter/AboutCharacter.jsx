import { useLocation } from 'react-router-dom';
import { baseAPI } from '../../../utils/APIs/baseAPI';
import useFetch from '../../../utils/hooks/useFetch';
import Loading from '../../../utils/hoc/Loading';
import { imageAPI } from '../../../utils/APIs/imageAPI';
import useImg from '../../../utils/hooks/useImg';
import './aboutCharacter.scss';

export const AboutCharacter = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useImg(`${imageAPI}/${category}/${idItem}.jpg`);

  const { name, height, mass, hair_color, skin_color, eye_color, birth_year, garder, homeworld, films, species, vehicles, starships } = data;

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
          <div className="characteristics-points">
            <h2 className="characteristics-points__name">{name}</h2>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Birth Year:</div>
              <div className="characteristics-point__info">{birth_year}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Species:</div>
              <div className="characteristics-point__info">{species && 'unknow'}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Height:</div>
              <div className="characteristics-point__info">{height}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Mass:</div>
              <div className="characteristics-point__info">{mass}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Gender:</div>
              <div className="characteristics-point__info">{garder}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Hair Color:</div>
              <div className="characteristics-point__info">{hair_color}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Eye Color:</div>
              <div className="characteristics-point__info">{eye_color}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Skin Color</div>
              <div className="characteristics-point__info">{skin_color}</div>
            </div>
            <div className="characteristics-point characteristics-point_homeworld">
              <div className="characteristics-point__title">Homeworld:</div>
              <div className="characteristics-point__info">{'Develop'}</div>
            </div>
          </div>
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
            <h2 className="items-related__item-title">Related Vehicles</h2>
            <div className='items-related__list'>
              {
                vehicles?.map(film => (
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
            <h2 className="items-related__item-title">Related Starships</h2>
            <div className='items-related__list'>
              {
                starships?.map(film => (
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