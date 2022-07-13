import { Link } from 'react-router-dom';

import worldMapMobile from '../../assets/images/world-map-mobile.png';
import worldMapTablet from '../../assets/images/world-map-tablet.png';
import worldMapDesktop from '../../assets/images/world-map-desktop.png';

const Main = () => {
  return (
    <main className='flex w-full flex-col items-center'>
      <section className='flex w-[82.93%] flex-col items-center gap-[4.5rem] tablet:w-[89.71%] tablet:gap-8 desktop:w-[77.08%] desktop:gap-[7.5rem]'>
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
        <div className='hidden tablet:block'>
          <img
            className='hidden tablet:block desktop:hidden'
            src={worldMapTablet}
            alt=''
          />
          <img className='hidden desktop:block' src={worldMapDesktop} alt='' />
        </div>
        <div className='flex w-[82.93%]  flex-col items-center gap-8 text-center tablet:w-[83.16%] tablet:gap-10 desktop:w-full desktop:flex-row desktop:gap-[6.563rem] desktop:text-left'>
          <div className='flex flex-col items-center gap-8 desktop:w-[74.41%] desktop:flex-row desktop:gap-[1.875rem]'>
            <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] text-dark-navy tablet:max-w-[28.563rem] desktop:w-[42.49%]'>
              Your City Not Listed?
            </h2>
            <p className='font-body text-dim-grey desktop:w-[53.87%]'>
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
