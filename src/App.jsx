import { Route, Routes } from 'react-router-dom';
import useFetch from './hooks/useFetch';
import { CategoryItems, HomeMenu, ErrorPage } from './pages';
import Layout from './components/Layout';
import './styles/common.scss';

function App() {
  const { data } = useFetch('https://swapi.dev/api/');

  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomeMenu />} />
        <Route path='/items' element={<CategoryItems />} />
      </Route>
    </Routes>
  );
}

export default App;
