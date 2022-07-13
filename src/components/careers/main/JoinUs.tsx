import { Link } from 'react-router-dom';

// image
import joinUsImg from '../../../assets/images/join-us.jpg';

// pattern
import leftDownwardArrow from '../../../assets/patterns/left-downward-arrow.svg';
import circle from '../../../assets/patterns/circle.svg';

const JoinUs = () => {
  return (
    <section className='mb-[7.5rem] flex w-[82.93%] flex-col items-center gap-14 text-center tablet:w-[74.60%] tablet:gap-16 desktop:flex-row-reverse desktop:gap-[13.75rem] desktop:text-left'>
      <div className='relative'>
        <div>
          <img className='rounded-full' src={joinUsImg} alt='' />
        </div>
        <div className='absolute bottom-0 left-0 z-10 w-[45.938rem] tablet:-left-[7.813rem]'>
          <img className='h-full w-full' src={leftDownwardArrow} alt='' />
        </div>
        <div className='absolute top-0 -right-[509px] hidden tablet:block'>
          <img src={circle} alt='' />
        </div>
      </div>
      <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'>
        <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy desktop:items-start desktop:gap-6'>
          Care to join our mission?
        </h2>
        <p className='font-body text-dim-grey'>
          We’re always looking for ambitious individuals to help us on our
          journey. If you’re passionate about our mission to provide clean,
          accessible transport to improve urban living we want to hear from you!
        </p>
        <Link className='btn' to=''>
          Say Hello
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
