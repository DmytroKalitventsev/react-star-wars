import './pagination.scss';
import { usePaginationRange } from '../../utils/hooks';

export const Pagination = ({ itemsCount, currentPage, setCurrentPage }) => {
  const totalPages = Math.ceil(itemsCount / 10);
  const siblings = 1;

  const paginationRange = usePaginationRange(totalPages, currentPage, siblings);

  const handlePageChange = (value) => {
    if (value === '...') return;

    if (value === 'prev' && currentPage !== 1) {
      setCurrentPage(prev => prev - 1);
    }

    if (value === 'next' && currentPage !== totalPages) {
      setCurrentPage(prev => prev + 1);
    }

    if (value !== 'next' && value !== 'prev') {
      setCurrentPage(value);
    }
  }
  
  return (
    <ul className="pagination">
      <li className='pagination__item pagination__item_side'>
        <span className='pagination__link' href="#" onClick={() => handlePageChange('prev')}>&#10094;</span>
      </li>
      {
        paginationRange.map(value => (
          <li className='pagination__item' key={crypto.randomUUID()}>
            <span
              className={`pagination__link
                ${value === currentPage ? 'pagination__link_active' : ''}
                ${value === '...' ? 'pagination__link_dots' : ''}
              `}
              href="#"
              onClick={() => handlePageChange(value)}
            >
              {value}
            </span>
          </li>
        ))
      }
      <li className='pagination__item pagination__item_side'>
        <span className='pagination__link' href="#" onClick={() => handlePageChange('next')}>&#10095;</span>
      </li>
    </ul>
  );
};