import './categoryItems.scss';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useFetch } from '../../utils/hooks';
import { baseAPI } from '../../utils/APIs';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { CategoryItem, Pagination } from "../../components";

export const CategoryItems = () => {
  const { state } = useLocation();
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const [currentPage, setCurrentPage] = useState(1);

  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/?page=${currentPage}`);
  const { results: dataItems, count: countItems } = data;

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
          countItems={countItems}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </ErrorProcessing>
    </Loading>
  );
};