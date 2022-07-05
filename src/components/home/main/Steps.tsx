import locateIcon from '../../../assets/icons/locate.svg';
import scooterIcon from '../../../assets/icons/scooter.svg';
import rideIcon from '../../../assets/icons/ride.svg';

const Steps = () => {
  return (
    <section className='relative z-10 flex w-[82.93%] flex-col items-center gap-12 tablet:w-[74.60%] tablet:max-w-[50rem] tablet:gap-10 desktop:w-[77.08%] desktop:max-w-[90rem] desktop:flex-row desktop:items-start desktop:gap-[1.875rem]'>
      <div className='absolute top-[129px] left-[-208px] -z-10 hidden h-4 w-[32.063rem] rotate-90 bg-light-grey tablet:block desktop:top-[2.563rem] desktop:w-[87.66%] desktop:rotate-0'></div>
      <div className='flex flex-col items-center gap-6 text-center tablet:flex-row tablet:items-start tablet:gap-20 tablet:text-left desktop:w-[31.53%] desktop:flex-col desktop:gap-10'>
        <div className='h-[3.5rem] w-[3.5rem] tablet:h-[6rem] tablet:w-[6rem]'>
          <img className='w-full' src={locateIcon} alt='' />
        </div>
        <div className='flex flex-col gap-6 tablet:w-[69.45%] tablet:gap-[1.688rem] desktop:w-full'>
          <h3 className='font-h5 tablet:font-h4 text-dark-navy'>
            Locate with app
          </h3>
          <p className='font-body text-dim-grey'>
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-6 text-center tablet:flex-row tablet:items-start tablet:gap-20 tablet:text-left desktop:w-[31.53%] desktop:flex-col desktop:gap-10'>
        <div className='h-[3.5rem] w-[3.5rem] tablet:h-[6rem] tablet:w-[6rem]'>
          <img className='w-full' src={scooterIcon} alt='' />
        </div>
        <div className='flex flex-col gap-6 tablet:w-[69.45%] tablet:gap-[1.688rem] desktop:w-full'>
          <h3 className='font-h5 tablet:font-h4 text-dark-navy'>
            Pick your scooter
          </h3>
          <p className='font-body text-dim-grey'>
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>
      </div>
      <div className='flex flex-col items-center gap-6 text-center tablet:flex-row tablet:items-start tablet:gap-20 tablet:text-left desktop:w-[31.53%] desktop:flex-col desktop:gap-10'>
        <div className='h-[3.5rem] w-[3.5rem] tablet:h-[6rem] tablet:w-[6rem]'>
          <img className='w-full' src={rideIcon} alt='' />
        </div>
        <div className='flex flex-col gap-6 tablet:w-[69.45%] tablet:gap-[1.688rem] desktop:w-full'>
          <h3 className='font-h5 tablet:font-h4 text-dark-navy'>
            Enjoy the ride
          </h3>
          <p className='font-body text-dim-grey'>
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
