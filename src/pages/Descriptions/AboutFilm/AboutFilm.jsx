import './aboutFilm.scss';
import { useLocation } from 'react-router-dom';
import { useFetch, useValidationImg } from '../../../utils/hooks';
import { baseAPI, imageAPI } from '../../../utils/APIs';
import { Loading } from '../../../utils/hoc';
import { CharacteristicsPoints } from '../../../components';

export const AboutFilm = () => {
  const { state } = useLocation();
  const idItem = state?.idItem;
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/${idItem}/`);
  const { isValidSrc, isError, setIsError } = useValidationImg(`${imageAPI}/${category}/${idItem}.jpg`);

  const { title, opening_crawl, director, producer, release_date, characters, planets, species, vehicles, starships } = data;

  return (
    <Loading data={loading}>
      <div className='about-item'>
        <div className='item-characteristics'>
          <div className="item-characteristics__img adaptive-img">
            <img
              src={isValidSrc}
              alt={title}
              onLoad={() => isError ? setIsError(false) : null}
            />
          </div>

          <CharacteristicsPoints data={data}/>

        </div>
        <div className='items-related'>
          <div className="items-related__item">
            <h2 className="items-related__item-title">Related Characters</h2>
            <div className='items-related__list'>
              {
                characters?.map(film => (
                  <div key={crypto.randomUUID()} className="item-related">
                    <div className="item-related__img adaptive-img">
                      <img
                        src={isValidSrc}
                        alt={title}
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
            <h2 className="items-related__item-title">Related Planets</h2>
            <div className='items-related__list'>
              {
                planets?.map(film => (
                  <div key={crypto.randomUUID()} className="item-related">
                    <div className="item-related__img adaptive-img">
                      <img
                        src={isValidSrc}
                        alt={title}
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
            <h2 className="items-related__item-title">Related Species</h2>
            <div className='items-related__list'>
              {
                species?.map(film => (
                  <div key={crypto.randomUUID()} className="item-related">
                    <div className="item-related__img adaptive-img">
                      <img
                        src={isValidSrc}
                        alt={title}
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
                        alt={title}
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
                        alt={title}
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