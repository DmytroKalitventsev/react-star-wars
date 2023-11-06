import './characteristicsPoint.scss';

export const CharacteristicsPoint = ({ title, value }) => {
  return (
    <div className="characteristics-point">
      <div className="characteristics-point__title">{title.replace(/_/g, ' ')}:</div>
      <div className="characteristics-point__info">{value.replace('n/a', 'unknown')}</div>
    </div>
  );
};