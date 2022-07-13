// images
import digitalEraImg from '../../../assets/images/digital-era.jpg';
import betterLivingImg from '../../../assets/images/better-living.jpg';

// patterns
import leftUpwardArrow from '../../../assets/patterns/left-upward-arrow.svg';
import rightDownwardArrow from '../../../assets/patterns/right-downward-arrow.svg';
import circle from '../../../assets/patterns/circle.svg';

const Features = () => {
  return (
    <section className='flex w-[82.93%] flex-col items-center gap-[7.5rem] text-center tablet:w-[74.60%] desktop:w-[77.08%] desktop:gap-40 desktop:text-left'>
      <div className='flex flex-col items-center gap-14 desktop:flex-row-reverse desktop:gap-[13.75rem]'>
        <div className='relative'>
          <div>
            <img className='rounded-full' src={digitalEraImg} alt='' />
          </div>
          <div className='absolute top-[8.313rem] z-10 w-[45.938rem] tablet:-left-[7.813rem] tablet:top-[16.5rem]'>
            <img className='absolute' src={leftUpwardArrow} alt='' />
          </div>
          <div className='absolute top-0 -right-[509px] hidden tablet:block'>
            <img src={circle} alt='' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'>
          <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem] desktop:items-start desktop:gap-6'>
            Mobility for the digital era
          </h2>
          <p className='font-body text-dim-grey'>
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-14 text-center desktop:flex-row desktop:gap-[13.75rem] desktop:text-left'>
        <div className='relative'>
          <div>
            <img className='rounded-full' src={betterLivingImg} alt='' />
          </div>
          <div className='absolute top-0 right-0 z-10 w-[45.938rem] tablet:-left-[550px]'>
            <img className='absolute' src={rightDownwardArrow} alt='' />
          </div>
          <div className='absolute top-0 -left-[509px] hidden tablet:block'>
            <img src={circle} alt='' />
          </div>
        </div>
        <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'>
          <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem] '>
            Better urban <br className='hidden tablet:inline' /> living
          </h2>
          <p className='font-body text-dim-grey'>
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
