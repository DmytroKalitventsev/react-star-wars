import './categoryItems.scss';
import { useState } from 'react';
import { useLocation } from "react-router-dom";
import { useGetCategoryItemsQuery } from '../../redux';
import { useNameReplace } from '../../utils/hooks';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { CategoryItem, Pagination } from "../../components";

export const CategoryItems = () => {
  const { state } = useLocation();

  const [categoryName] = useNameReplace(state?.categoryName, 'characters', 'people');
  const [currentPage, setCurrentPage] = useState(1);

  const { data: categoryItems, error, isFetching } = useGetCategoryItemsQuery({ categoryName, currentPage });

  return (
    <ErrorProcessing error={error}>
      <Loading data={isFetching}>
        <div className="category-items">
          {
            categoryItems?.results?.map(itemData =>
              <CategoryItem
                key={crypto.randomUUID()}
                itemData={itemData}
              />
            )
          }
        </div>

        <Pagination
          itemsCount={categoryItems?.count}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />

      </Loading>
    </ErrorProcessing>
  );
};