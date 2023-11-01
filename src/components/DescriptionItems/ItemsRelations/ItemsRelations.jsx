import './itemsRelations.scss';
import { RelationsList } from '../RelationsList/RelationsList';

export const ItemsRelations = ({ data }) => {
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
  const relations = Object.entries(data).filter(([key]) => includesData.includes(key));
  
  return (
    <div className='items-relations'>
      {
        relations.map(([category, links]) => (
          <div className="items-relations__item" key={crypto.randomUUID()}>
            <h2 className="items-relations__title">Related {category}</h2>

            <RelationsList links={links} category={category}/>

          </div>
        ))
      }
    </div>
  );
};