import whiteCircles from '../../assets/patterns/white-circles.svg';

const Header = () => {
  return (
    <header className='mb-[4.5rem] flex w-full items-center justify-center py-[3.75rem] text-center tablet:relative tablet:mb-36 tablet:justify-start tablet:py-[4.5rem] tablet:pl-24'>
      <h1 className='font-h3 tablet:font-h1 leading-[2.5rem] text-white'>
        Locations
      </h1>
      <div className='hidden tablet:absolute tablet:-right-[1.938rem] tablet:block'>
        <img src={whiteCircles} alt='' />
      </div>
    </header>
  );
};

export default Header;
