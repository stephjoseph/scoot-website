import Header from './locations/Header';
import Main from './locations/Main';

const Locations = () => {
  return (
    <div
      id='locations'
      className='mb-[4.5rem] flex w-full flex-col items-center tablet:mb-[7.5rem]'
    >
      <Header />
      <Main />
    </div>
  );
};

export default Locations;
