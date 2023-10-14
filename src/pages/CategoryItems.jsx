import { useParams } from "react-router-dom";
import CategoryItem from "../components/CategoryItem";
import Loading from "../hoc/Loading";
import useFetch from "../hooks/useFetch";

export const CategoryItems = () => {
  const { category } = useParams();
  const linkAddress = category === 'characters' ? 'people' : category;
  const { data, loading, isValidApi } = useFetch(`https://swapi.dev/api/${linkAddress}/`);

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