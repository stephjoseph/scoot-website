import Header from './careers/Header';
import Main from './careers/Main';

const Careers = () => {
  return (
    <div
      id='careers'
      className='mb-[7.5rem] flex w-full flex-col items-center desktop:mb-[10rem]'
    >
      <Header />
      <Main />
    </div>
  );
};

export default Careers;
