import './itemsRelations.scss';
import { RelationsList } from '../RelationsList/RelationsList';

export const ItemsRelations = ({ itemDescriptions }) => {
  const includesData = [
    'films',
    'species',
    'vehicles',
    'starships',
    'planets',
    'characters',
    'people',
    'pilots',
    'residents',
  ];
  const relations = itemDescriptions && Object.entries(itemDescriptions).filter(([key]) => includesData.includes(key));

  return (
    <div className='items-relations'>
      {
        relations.map(([initialCategory, urls]) => (
          <div
            className="items-relations__item"
            key={crypto.randomUUID()}
          >
            <h2 className="items-relations__title">Related {initialCategory}</h2>

            <RelationsList
              urls={urls}
              initialCategory={initialCategory}
            />

          </div>
        ))
      }
    </div>
  );
};