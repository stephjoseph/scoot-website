import Header from './home/Header';
import Main from './home/Main';

const Home = () => {
  return (
    <div id='home' className='flex w-full flex-col items-center'>
      <Header />
      <Main />
    </div>
  );
};

export default Home;
