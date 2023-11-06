import './characteristicsList.scss';
import { RenderElement } from '../../../utils/hoc';
import { CharacteristicsPoint } from '../CharacteristicsPoint/CharacteristicsPoint';
import { CharacteristicsPointUrl } from '../CharacteristicsPointUrl/CharacteristicsPointUrl';

export const CharacteristicsList = ({ characteristics, urlHomeWorld }) => {
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

      <RenderElement data={urlHomeWorld}>
        <CharacteristicsPointUrl urlHomeWorld={urlHomeWorld} />
      </RenderElement>
    </div>
  );
};