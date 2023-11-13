import './characteristicsPoint.scss';
import { RenderElement } from '../../../utils/hoc';

export const CharacteristicsPoint = ({ itemName, itemValue }) => {
  const filmDescription = itemName === 'opening_crawl' && true;
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
  const unit = unitMap[itemName] || '';

  return (
    <div className="characteristics-point">
      <div className="characteristics-point__title">{itemName?.replace(/_/g, ' ')}:</div>
      {
        filmDescription
          ?
          <div className="characteristics-point__info characteristics-point__info_text-transform">{itemValue?.replace('n/a', 'unknown')}</div>
          :
          <div className="characteristics-point__info">
            <span className='characteristics-point__value'>{itemValue?.replace('n/a', 'unknown')}</span>

            <RenderElement data={unit}>
              <span className='characteristics-point__unit'>{unit}</span>
            </RenderElement>
            
          </div>
      }
    </div>
  );
};