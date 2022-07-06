import { Link } from 'react-router-dom';

import appStoreSmallIcon from '../assets/icons/app-store-small.svg';
import googlePlaySmallIcon from '../assets/icons/google-play-small.svg';
import appStoreIcon from '../assets/icons/app-store.svg';
import googlePlayIcon from '../assets/icons/google-play.svg';

const CTA = () => {
  return (
    <section
      className='flex w-full flex-col items-center gap-10 bg-dark-navy py-[5.5rem] text-center tablet:py-[3.875rem] desktop:flex-row desktop:justify-between desktop:py-[6.375rem] desktop:px-[10.313rem]'
      id='CTA'
    >
      <h2 className="tablet:font-h2 w-[82.93%] font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-white tablet:max-w-[28.563rem]">
        Sign up and Scoot off today
      </h2>
      <div className='flex items-center gap-[0.813rem] desktop:gap-[1.125rem]'>
        <Link className='h-10 w-[7.098rem] desktop:h-14 desktop:w-40' to=''>
          <img className='desktop:hidden' src={appStoreSmallIcon} alt='' />
          <img className='hidden desktop:block' src={appStoreIcon} alt='' />
        </Link>
        <Link
          className='h-10 w-[8.125rem] desktop:h-14 desktop:w-[11.375rem]'
          to=''
        >
          <img className='desktop:hidden' src={googlePlaySmallIcon} alt='' />
          <img className='hidden desktop:block' src={googlePlayIcon} alt='' />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
