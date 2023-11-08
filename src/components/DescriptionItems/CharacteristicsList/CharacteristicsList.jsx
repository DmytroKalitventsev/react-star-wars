import './characteristicsList.scss';
import { CharacteristicsPoint } from '../CharacteristicsPoint/CharacteristicsPoint';

export const CharacteristicsList = ({ characteristics }) => {
  return (
    <div className='characteristics-list'>
      {
        characteristics.map(([title, value]) => (
          <CharacteristicsPoint
            title={title}
            value={value}
            key={crypto.randomUUID()}
          />
        ))
      }
    </div>
  );
};