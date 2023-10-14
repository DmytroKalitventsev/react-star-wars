import { useParams } from "react-router-dom";
import useFetch from "../../utils/hooks/useFetch";
import Loading from "../../utils/hoc/Loading";
import { baseAPI } from "../../APIs/baseAPI";
import { CategoryItem } from "../../components";

export const CategoryItems = () => {
  const { category } = useParams();
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`${baseAPI}/${linkAddress}/`);

  return (
    <div className="category-items">
      <Loading data={loading}>
        {
          data.results?.map(item =>
            <CategoryItem
              key={crypto.randomUUID()}
              data={item}
              category={category}
            />
          )
        }
      </Loading>
    </div>
  );
};