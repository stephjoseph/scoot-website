import line from '../../assets/patterns/line.svg';
import rightArrow from '../../assets/patterns/right-arrow.svg';
import whiteCircles from '../../assets/patterns/white-circles.svg';

const Header = () => {
  return (
    <header className='relative mb-[7.5rem] flex w-full items-center justify-center pt-[7.188rem] pb-[11.188rem] text-center tablet:pb-[13.563rem] tablet:pt-[8.5rem] desktop:mb-40 desktop:justify-start desktop:py-[9.563rem] desktop:pl-[10.313rem] desktop:text-left'>
      <div className='flex max-w-[19.438rem] flex-col items-center gap-8 tablet:max-w-[35.813rem] desktop:max-w-[31.25rem] desktop:items-start desktop:gap-10'>
        <div className='flex flex-col items-center gap-6 desktop:gap-10'>
          <h1 className='font-h3 tablet:font-h1 text-white'>
            Scooter sharing made simple
          </h1>
          <p className='font-body text-white desktop:ml-24 desktop:w-[25.313rem]'>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
        </div>
        <button className='btn desktop:ml-24'>Get Scootin</button>
      </div>
      <div className='absolute top-[54.61%] left-0 hidden desktop:block'>
        <img src={line} alt='' />
      </div>
      <div className='absolute left-[-19.5rem] top-[73.53%] h-[8.625rem] w-[27.938rem] tablet:left-[-7.938rem] tablet:top-[72.76%] desktop:top-[54.61%] desktop:left-[44.063rem]'>
        <img className='w-full' src={rightArrow} alt='' />
      </div>
      <div className='absolute right-[-1.938rem] top-[83.38%] hidden h-[3.938rem] w-[14.625rem] tablet:block desktop:top-[65%]'>
        <img className='w-full' src={whiteCircles} alt='' />
      </div>
    </header>
  );
};

export default Header;
