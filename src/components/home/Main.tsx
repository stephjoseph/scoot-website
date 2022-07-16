import Features from './main/Features';
import Steps from './main/Steps';

function Main() {
  return (
    <main className='z-10 mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] tablet:gap-[9.063rem] desktop:mb-[12.5rem] desktop:gap-[12.5rem]'>
      <Steps />
      <Features />
    </main>
  );
}

export default Main;
