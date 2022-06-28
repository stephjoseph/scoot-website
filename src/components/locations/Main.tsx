import { Link } from 'react-router-dom';

import worldMapMobile from '../../assets/images/world-map-mobile.png';
import worldMapTablet from '../../assets/images/world-map-tablet.png';

const Main = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <section className='flex w-[82.93%] flex-col items-center gap-[4.5rem] tablet:w-[89.71%] tablet:gap-8'>
        <div className='flex flex-col items-center gap-10 tablet:hidden'>
          <div>
            <img src={worldMapMobile} alt='' />
          </div>
          <div className='flex w-[82.93%] flex-col items-center gap-4'>
            <div className='flex w-full items-center justify-center bg-yellow/[0.15] py-[1.375rem]'>
              <h2 className='font-h2 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
                New York
              </h2>
            </div>
            <div className='flex w-full items-center justify-center bg-yellow/[0.15] py-[1.375rem]'>
              <h2 className='font-h2 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
                London
              </h2>
            </div>
            <div className='flex w-full items-center justify-center bg-yellow/[0.15] py-[1.375rem]'>
              <h2 className='font-h2 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
                Jakarta
              </h2>
            </div>
            <div className='flex w-full items-center justify-center bg-yellow/[0.15] py-[1.375rem]'>
              <h2 className='font-h2 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
                Yokohama
              </h2>
            </div>
          </div>
        </div>
        <div>
          <img src={worldMapTablet} alt='' />
        </div>
        <div className='flex w-[82.93%] flex-col items-center gap-8 text-center tablet:w-[83.16%] tablet:gap-10'>
          <div className='flex flex-col items-center gap-8'>
            <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] text-dark-navy tablet:max-w-[28.563rem]'>
              Your City Not Listed?
            </h2>
            <p className='font-body text-dim-grey'>
              If you’d like to see Scoot in your hometown, be sure to let us
              know. We track requests and plan launches based on demand. Feel
              free to message us by clicking the link or messaging us on social.
            </p>
          </div>
          <Link className='btn' to=''>
            Message Us
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Main;
