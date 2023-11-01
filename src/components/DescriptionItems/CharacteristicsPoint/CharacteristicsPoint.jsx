import './characteristicsPoint.scss';

export const CharacteristicsPoint = ({ title, info }) => {
  return (
    <div className="characteristics-point" key={crypto.randomUUID()}>
      <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
      <div className="characteristics-point__info">{info.replace('n/a', 'unknown')}</div>
    </div>
  );
};