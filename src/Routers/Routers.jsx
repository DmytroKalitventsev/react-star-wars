import { Route, Routes, HashRouter } from "react-router-dom";
import { BasicStructure, HomeMenu, PageNotFound, CategoryItems, DescriptionsItems } from "../pages";

export const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<BasicStructure />}>
          <Route index element={<HomeMenu />} />
          <Route path=':category' element={<CategoryItems />} />
          <Route path=":category/:descriptions" element={<DescriptionsItems />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
};