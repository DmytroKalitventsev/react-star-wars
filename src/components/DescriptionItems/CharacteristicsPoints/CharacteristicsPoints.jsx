import './characteristicsPoints.scss';
import { CharacteristicsList } from '../CharacteristicsList/CharacteristicsList';

export const CharacteristicsPoints = ({ data }) => {
  const exclusionData = [
    'name',
    'title',
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
  const characteristics = Object.entries(data).filter(([key]) => !exclusionData.includes(key));

  return (
    <div className="characteristics-points">
      <h2 className="characteristics-points__name">{data.name ? data.name : data.title}</h2>

      <CharacteristicsList characteristics={characteristics}/>

    </div>
  );
};