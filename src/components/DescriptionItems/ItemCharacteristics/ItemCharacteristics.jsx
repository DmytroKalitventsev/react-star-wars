import './itemCharacteristics.scss';
import { CharacteristicsPoints } from '../CharacteristicsPoints/CharacteristicsPoints';
import { ImageItems } from '../../ImageItems/ImageItems';

export const ItemCharacteristics = ({ data, idItem, category }) => {
  return (
    <div className='item-characteristics'>

      <ImageItems
        name={data.name ? data.name : data.title}
        category={category}
        idItem={idItem}
      />

      <CharacteristicsPoints data={data} />

    </div>
  );
};