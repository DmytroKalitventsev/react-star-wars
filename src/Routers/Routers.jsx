import { Route, Routes, HashRouter } from "react-router-dom";
import { BasicStructure, HomeMenu, CategoryItems, ErrorPage, DescriptionsItems} from "../pages";

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<BasicStructure />}>
          <Route index element={<HomeMenu />} />
          <Route path=':category' element={<CategoryItems />} />
          <Route path=":category/:slug" element={<DescriptionsItems />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;