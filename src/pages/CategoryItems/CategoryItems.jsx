import './categoryItems.scss';
import { useLocation } from "react-router-dom";
import { useFetch } from '../../utils/hooks';
import { baseAPI } from '../../utils/APIs';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { CategoryItem, Pagination } from "../../components";
import { useState } from 'react';

export const CategoryItems = () => {
  const { state } = useLocation();
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/?page=${currentPage}`);
  const { results: dataItems, count: countItems } = data;

  const totalPage = Math.ceil(countItems / dataItems?.length);

  const handlePageChange = (value) => {
    if (value === '...') return;

    if (value === 'prev' && currentPage !== 1) {
      setCurrentPage(prev => prev - 1);
    }

    if (value === 'next' && currentPage !== totalPage) {
      setCurrentPage(prev => prev + 1);
    }

    if (value !== 'next' && value !== 'prev') {
      setCurrentPage(value);
    }
  }
  console.log(currentPage)
  return (
    <Loading data={loading}>
      <ErrorProcessing isValidApi={isValidApi}>
        <div className="category-items">
          {
            dataItems?.map(item =>
              <CategoryItem
                key={crypto.randomUUID()}
                data={item}
              />
            )
          }
        </div>

        <Pagination
          totalPage={totalPage}
          currentPage={currentPage}
          siblings={1}
          onPageChange={handlePageChange}
        />

      </ErrorProcessing>
    </Loading>
  );
};