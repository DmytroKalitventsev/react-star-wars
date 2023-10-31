import './aboutVehicle.scss';
import { useLocation } from 'react-router-dom';
import { useFetch, useValidationImg } from '../../../utils/hooks';
import { baseAPI, imageAPI } from '../../../utils/APIs';
import { Loading } from '../../../utils/hoc';

export const AboutVehicle = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  const {
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    vehicle_class,
    pilots,
    films
  } = data;

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
              <div className="characteristics-point__title">Model:</div>
              <div className="characteristics-point__info">{model}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Manufacturer:</div>
              <div className="characteristics-point__info">{manufacturer}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Class:</div>
              <div className="characteristics-point__info">{vehicle_class}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Cost:</div>
              <div className="characteristics-point__info">{cost_in_credits}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Speed:</div>
              <div className="characteristics-point__info">{max_atmosphering_speed}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Length:</div>
              <div className="characteristics-point__info">{length}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Cargo Capacity:</div>
              <div className="characteristics-point__info">{cargo_capacity}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Mimimum Crew:</div>
              <div className="characteristics-point__info">{crew}</div>
            </div>
            <div className="characteristics-point">
              <div className="characteristics-point__title">Passengers:</div>
              <div className="characteristics-point__info">{passengers}</div>
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
            <h2 className="items-related__item-title">Related Pilots</h2>
            <div className='items-related__list'>
              {
                pilots?.map(film => (
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