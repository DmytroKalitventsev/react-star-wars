import './characteristicsPoints.scss';

export const CharacteristicsPoints = ({ data }) => {
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
  const characteristics = Object.entries(data).filter(([key]) => !exclusionData.includes(key));

  return (
    <div className="characteristics-points">
      <h2 className="characteristics-points__name">{data.name ? data.name : data.title}</h2>

      <div className='characteristics-list'>
        {
          characteristics.map(([title, info]) => (
            <div className="characteristics-point" key={crypto.randomUUID()}>
              <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
              <div className="characteristics-point__info">{info.replace('n/a', 'unknown')}</div>
            </div>
          ))
        }
      </div>
    </div>
  );
};