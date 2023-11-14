import './homeMenu.scss';
import { useGetCategoriesQuery } from '../../redux';
import { ErrorProcessing, Loading } from '../../utils/hoc';
import { MenuCard } from "../../components";

export const HomeMenu = () => {
  const { data, isLoading, error } = useGetCategoriesQuery();
  const categories = data && Object.entries(data);

  return (
    <ErrorProcessing error={error}>
      <Loading data={isLoading}>
        <div className="home-menu">
          {
            categories?.map(([itemName]) =>
              <MenuCard
                key={crypto.randomUUID()}
                itemName={itemName}
              />
            )
          }
        </div>
      </Loading>
    </ErrorProcessing>
  );
};