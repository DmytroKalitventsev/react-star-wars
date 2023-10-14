import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CategoryItems, HomeMenu, DescriptionItem, ErrorPage } from "../pages";
import { Wrapper } from "../layout";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Wrapper />}>
          <Route index element={<HomeMenu />} />
          <Route path=':category' element={<CategoryItems />} />
          <Route path=':description' element={<DescriptionItem />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;