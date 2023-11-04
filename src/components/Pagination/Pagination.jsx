import './pagination.scss';
import { usePaginationRange } from '../../utils/hooks';

export const Pagination = ({ totalPage, currentPage, siblings, onPageChange }) => {
  const array = usePaginationRange(totalPage, currentPage, siblings);
  
  return (
    <ul className="page">
      <li className='page__item'>
        <span className='page__link' href="#" onClick={() => onPageChange('prev')}>&#10094;</span>
      </li>
      {
        array.map(value => (
          <li className='page__item' key={crypto.randomUUID()}>
            <span
              className={`page__link
                ${value === currentPage ? 'page__link_active' : ''}
                ${value === '...' ? 'page__link_dots' : ''}
              `}
              href="#"
              onClick={() => onPageChange(value)}
            >
              {value}
            </span>
          </li>
        ))
      }
      <li className='page__item'>
        <span className='page__link' href="#" onClick={() => onPageChange('next')}>&#10095;</span>
      </li>
    </ul>
  );
};