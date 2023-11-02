import './categoryItems.scss';
import { useLocation } from "react-router-dom";
import { useFetch } from '../../utils/hooks';
import { baseAPI } from '../../utils/APIs';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { CategoryItem, Pagination } from "../../components";

export const CategoryItems = () => {
  const { state } = useLocation();
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}`);

  return (
    <Loading data={loading}>
      <ErrorProcessing isValidApi={isValidApi}>
        <div className="category-items">
          {
            data.results?.map(item =>
              <CategoryItem
                key={crypto.randomUUID()}
                data={item}
              />
            )
          }
        </div>

        <Pagination />
      </ErrorProcessing>
    </Loading>
  );
};