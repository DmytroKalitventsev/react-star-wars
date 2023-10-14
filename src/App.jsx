import { Route, Routes } from 'react-router-dom';
import { CategoryItems, HomeMenu, ErrorPage } from './pages';
import Layout from './components/Layout';
import './styles/common.scss';
import DescriptionItem from './pages/DescriptionItem';

function App() {

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeMenu />} />
        <Route path=':category' element={<CategoryItems />} />
        <Route path=':description' element={<DescriptionItem />} />
      </Route>
      <Route path='*' element={<ErrorPage />} />
    </Routes>
  );
}

export default App;