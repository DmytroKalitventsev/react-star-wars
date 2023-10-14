import '../../common.scss';
import { Footer } from '../Footer/Footer';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export const Wrapper = () => {
  return (
    <div className='container'>

      <Header />

      <Main />

      <Footer />

    </div>
  );
};