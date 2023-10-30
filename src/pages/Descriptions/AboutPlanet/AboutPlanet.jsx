import { useLocation } from 'react-router-dom';
import { baseAPI } from '../../../utils/APIs/baseAPI';
import useFetch from '../../../utils/hooks/useFetch';
import useImg from '../../../utils/hooks/useImg';
import { imageAPI } from '../../../utils/APIs/imageAPI';
import Loading from '../../../utils/hoc/Loading';
import './aboutPlanet.scss';

export const AboutPlanet = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useImg(`${imageAPI}/${category}/${idItem}.jpg`);

  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, residents, films } = data;


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
              <div className="characteristics-point__title">Rotation Period: </div>
              <div className="characteristics-point__info">{rotation_period}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Orbital Period: </div>
              <div className="characteristics-point__info">{orbital_period}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Diameter:</div>
              <div className="characteristics-point__info">{diameter}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Climate:</div>
              <div className="characteristics-point__info">{climate}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Gravity:</div>
              <div className="characteristics-point__info">{gravity}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Surface Water:</div>
              <div className="characteristics-point__info">{surface_water}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Population:</div>
              <div className="characteristics-point__info">{population}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Terrain:</div>
              <div className="characteristics-point__info">{terrain}</div>
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
            <h2 className="items-related__item-title">Residents</h2>
            <div className='items-related__list'>
              {
                residents?.map(film => (
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