import { useLocation } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import Loading from "../../utils/hoc/Loading";
import { baseAPI } from "../../utils/APIs/baseAPI";
import { CategoryItem, Pagination } from "../../components";
import './categoryItems.scss';

export const CategoryItems = () => {
  const {state} = useLocation();
  const category = state?.category;
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/`);

  return (
    <Loading data={loading}>
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
    </Loading>
  );
};