import './itemCharacteristics.scss';
import { CharacteristicsPoints } from '../CharacteristicsPoints/CharacteristicsPoints';
import { ImageValid } from '../../ImageValid/ImageValid';

export const ItemCharacteristics = ({ itemDescriptions, itemId, currentCategory }) => {
  const itemName = itemDescriptions?.name ?? itemDescriptions?.title;

  return (
    <div className='item-characteristics'>

      <ImageValid
        itemName={itemName}
        categoryName={currentCategory}
        itemId={itemId}
      />

      <CharacteristicsPoints
        itemDescriptions={itemDescriptions}
        itemName={itemName}
      />

    </div>
  );
};