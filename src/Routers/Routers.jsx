import { Route, Routes, HashRouter } from "react-router-dom";
import { BasicStructure, HomeMenu, CategoryItems, ErrorPage, AboutCharacter, AboutPlanet, AboutFilm, AboutSpecie, AboutVehicle, AboutStarship } from "../pages";

const Routers = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<BasicStructure />}>
          <Route index element={<HomeMenu />} />
          <Route path=':category' element={<CategoryItems />} />
          <Route path="characters/:slug" element={<AboutCharacter />} />
          <Route path="planets/:slug" element={<AboutPlanet />} />
          <Route path="films/:slug" element={<AboutFilm />} />
          <Route path="species/:slug" element={<AboutSpecie />} />
          <Route path="vehicles/:slug" element={<AboutVehicle />} />
          <Route path="starships/:slug" element={<AboutStarship />} />
        </Route>
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
};

export default Routers;