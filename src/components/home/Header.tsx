import { motion } from 'framer-motion';

// patterns
import line from '../../assets/patterns/line.svg';
import rightArrow from '../../assets/patterns/right-arrow.svg';
import whiteCircles from '../../assets/patterns/white-circles.svg';

const Header = () => {
  return (
    <header className='relative mb-[7.5rem] flex w-full items-center justify-center pt-[7.188rem] pb-[11.188rem] text-center tablet:pb-[13.563rem] tablet:pt-[8.5rem] desktop:mb-40 desktop:justify-start desktop:py-[9.563rem] desktop:pl-[10.313rem] desktop:text-left'>
      <div className='flex max-w-[19.438rem] flex-col items-center gap-8 tablet:max-w-[35.813rem] desktop:max-w-[31.25rem] desktop:items-start desktop:gap-10'>
        <div className='flex flex-col items-center gap-6 desktop:gap-10'>
          <motion.h1
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 2,
              bounce: 0.3,
            }}
            viewport={{ once: true }}
            className='font-h3 tablet:font-h1 text-white'
          >
            Scooter sharing made simple
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 2,
              bounce: 0.3,
              delay: 0.5,
            }}
            viewport={{ once: true }}
            className='font-body text-white desktop:ml-24 desktop:w-[25.313rem]'
          >
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </motion.p>
        </div>
        <motion.button
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            type: 'spring',
            duration: 2,
            bounce: 0.3,
            delay: 1,
          }}
          viewport={{ once: true }}
          className='btn desktop:ml-24'
        >
          Get Scootin
        </motion.button>
      </div>
      <div className='absolute top-[54.61%] left-0 hidden scale-x-[-1] desktop:block'>
        <svg xmlns='http://www.w3.org/2000/svg' width='203' height='15'>
          <motion.path
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1, strokeWidth: 15 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            fill='none'
            stroke='#FCB72B'
            d='M203 7.5H.5'
          />
        </svg>
      </div>
      <div className='absolute left-[-19.5rem] top-[73.53%] h-[8.625rem] w-[27.938rem] tablet:left-[-7.938rem] tablet:top-[72.76%] desktop:top-[54.61%] desktop:left-[44.063rem]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='452' height='151'>
          <g
            fill='none'
            fill-rule='evenodd'
            stroke='#FCB72B'
            stroke-linejoin='bevel'
            stroke-width='15'
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, strokeWidth: 15 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              viewport={{ once: true }}
              d='M407.952 145.444l38.426-38.426-38.426-38.426'
            />
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, strokeWidth: 15 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              d='M0 8h270.115v99.369h176.263'
            />
          </g>
        </svg>
      </div>
      <div className='absolute right-[-1.938rem] top-[83.38%] hidden h-[3.938rem] w-[14.625rem] tablet:block desktop:top-[65%]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='234' height='63'>
          <g fill='none' fill-rule='evenodd'>
            <motion.circle
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.3,
                delay: 1,
              }}
              viewport={{ once: true }}
              cx='31'
              cy='31.5'
              r='29.5'
              stroke='#FFF'
              stroke-width='3'
            />
            <motion.circle
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.3,
                delay: 1.3,
              }}
              viewport={{ once: true }}
              cx='117'
              cy='31.5'
              r='29.5'
              stroke='#FFF'
              stroke-width='3'
            />
            <motion.circle
              initial={{ opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                type: 'spring',
                duration: 1.5,
                bounce: 0.3,
                delay: 1.6,
              }}
              viewport={{ once: true }}
              cx='203'
              cy='31.5'
              r='31'
              fill='#FFF'
            />
          </g>
        </svg>
      </div>
    </header>
  );
};

export default Header;
