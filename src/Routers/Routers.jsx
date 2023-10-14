import { Route, Routes, BrowserRouter } from "react-router-dom";
import { CategoryItems, HomeMenu, DescriptionItem, ErrorPage, InitialPage } from "../pages";

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<InitialPage />}>
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