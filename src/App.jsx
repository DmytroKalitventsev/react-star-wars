import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import useFetch from './hooks/useFetch';
import { CategoryItems, Home, ErrorPage } from './pages';
import './styles/common.scss';

function App() {
  const { data } = useFetch('https://swapi.dev/api/');

  return (
    <div className='container'>

      <Header />

      <main className="main">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/' element={<CategoryItems />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App;
