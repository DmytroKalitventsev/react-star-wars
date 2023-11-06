import { RenderElement } from '../../../utils/hoc';
import './characteristicsPoint.scss';

export const CharacteristicsPoint = ({ title, value }) => {
  const filmDescr = title === 'opening_crawl' && true;
  const unitMap = {
    height: 'cm',
    mass: 'kg',
    average_lifespan: 'years',
    average_height: 'cm',
    max_atmosphering_speed: 'km/h',
    length: 'm',
    cargo_capacity: 'metric tons',
    rotation_period: 'days',
    orbital_period: 'days',
    diameter: 'km',
    surface_water: '%',
  };
  const unit = unitMap[title] || '';

  return (
    <div className="characteristics-point">
      <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
      {
        filmDescr
          ?
          <div className="characteristics-point__info characteristics-point__info_text-transform">{value.replace('n/a', 'unknown')}</div>
          :
          <div className="characteristics-point__info">
            <span className='characteristics-point__value'>{value.replace('n/a', 'unknown')}</span>
            <RenderElement data={unit}>
              <span className='characteristics-point__unit'>{unit}</span>
            </RenderElement>
          </div>
      }
    </div>
  );
};