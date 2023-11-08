import './characteristicsList.scss';
import { CharacteristicsPoint } from '../CharacteristicsPoint/CharacteristicsPoint';

export const CharacteristicsList = ({ characteristics }) => {
  return (
    <div className='characteristics-list'>
      {
        characteristics.map(([title, info]) => (
          <CharacteristicsPoint
            title={title}
            info={info}
            key={crypto.randomUUID()}
          />
        ))
      }
    </div>
  );
};