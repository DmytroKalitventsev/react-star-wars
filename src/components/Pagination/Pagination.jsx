import { Link } from 'react-router-dom';
import './pagination.scss';

export const Pagination = () => {
  return (
    <ul className="page">
      <li className='page__item'>
        <Link className='page__link' href="#">Prev</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">1</Link>
      </li>
      <li className="page__item">
        <Link className='page__link page__link_dots' href="#">...</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">3</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">4</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link page__link_active' href="#">5</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">6</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">7</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link page__link_dots' href="#">...</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">15</Link>
      </li>
      <li className='page__item'>
        <Link className='page__link' href="#">Next</Link>
      </li>
    </ul>
  );
};