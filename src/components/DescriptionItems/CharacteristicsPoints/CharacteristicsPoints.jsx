import './characteristicsPoints.scss';
import { CharacteristicsList } from '../CharacteristicsList/CharacteristicsList';

export const CharacteristicsPoints = ({ itemDescriptions, itemName }) => {
  const exclusionData = [
    'name',
    'title',
    'homeworld',
    'episode_id',
    'consumables',
    'films',
    'species',
    'vehicles',
    'starships',
    'planets',
    'characters',
    'people',
    'pilots',
    'residents',
    'created',
    'edited',
    'url'
  ];
  const characteristics = itemDescriptions && Object.entries(itemDescriptions).filter(([descriptionName]) => !exclusionData.includes(descriptionName));

  return (
    <div className="characteristics-points">
      <h2 className="characteristics-points__name">{itemName}</h2>

      <CharacteristicsList
        characteristics={characteristics}
        urlHomeWorld={itemDescriptions?.homeworld}
      />

    </div>
  );
};