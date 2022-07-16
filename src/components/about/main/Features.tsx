import { motion } from 'framer-motion';

// images
import digitalEraImg from '../../../assets/images/digital-era.jpg';
import betterLivingImg from '../../../assets/images/better-living.jpg';

// patterns
import rightDownwardArrow from '../../../assets/patterns/right-downward-arrow.svg';
import circle from '../../../assets/patterns/circle.svg';

const Features = () => {
  return (
    <section className='flex w-[82.93%] flex-col items-center gap-[7.5rem] text-center tablet:w-[74.60%] desktop:w-[77.08%] desktop:gap-40 desktop:text-left'>
      <div className='flex flex-col items-center gap-14 desktop:flex-row-reverse desktop:gap-[13.75rem]'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1.5,
              bounce: 0.3,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img className='rounded-full' src={digitalEraImg} alt='' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1.5,
              bounce: 0.3,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className='absolute bottom-0 z-10 h-[8.625rem] w-[45.938rem] tablet:left-[-7.813rem]'
          >
            <svg xmlns='http://www.w3.org/2000/svg' width='741' height='151'>
              <g
                fill='none'
                fillRule='evenodd'
                stroke='#FCB72B'
                strokeLinejoin='bevel'
                strokeWidth='15'
              >
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 2 }}
                  viewport={{ once: true }}
                  d='M740.969 8H182.854v99.369H6.591'
                />
                <motion.path
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 0.5, delay: 1.9 }}
                  viewport={{ once: true }}
                  transform='scale(1, -1) translate(0, -215)'
                  d='M44.64 145.64L6.214 107.214 44.64 68.787'
                />
              </g>
            </svg>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, right: -600 }}
            whileInView={{ opacity: 1, right: -509 }}
            transition={{
              type: 'spring',
              duration: 1.5,
              bounce: 0.3,
              delay: 0,
            }}
            viewport={{ once: true }}
            className='absolute top-0 -right-[509px] hidden tablet:block'
          >
            <img src={circle} alt='' />
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start desktop:text-left'
        >
          <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem] desktop:items-start desktop:gap-6'>
            Mobility for the digital era
          </h2>
          <p className='font-body text-dim-grey'>
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </motion.div>
      </div>
      <div className='flex flex-col items-center gap-14 text-center desktop:flex-row desktop:gap-[13.75rem] desktop:text-left'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1.5, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1.5,
              bounce: 0.3,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img className='rounded-full' src={betterLivingImg} alt='' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1.5, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1.5,
              bounce: 0.3,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className='absolute  top-0 -left-[31.563rem] z-10 tablet:-left-[550px]'
          >
            <svg
              width='740'
              height='151'
              viewBox='0 0 740 151'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{
                  pathLength: 1,
                  strokeWidth: 15,
                  strokeLinejoin: 'bevel',
                }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
                d='M0 8H558.115V107.369H734.378'
                stroke='#FCB72B'
              />
              <motion.path
                initial={{ pathLength: 0 }}
                whileInView={{
                  pathLength: 1,
                  strokeWidth: 15,
                  strokeLinejoin: 'bevel',
                }}
                transition={{ duration: 0.5, delay: 1.9 }}
                viewport={{ once: true }}
                transform='scale(1, -1) translate(0, -215)'
                d='M695.591 145.639L734.017 107.213L695.591 68.7869'
                stroke='#FCB72B'
                stroke-width='15'
                stroke-linejoin='bevel'
              />
            </svg>
          </motion.div>
          <div className='absolute top-0 -left-[509px] hidden tablet:block'>
            <img src={circle} alt='' />
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ type: 'spring', duration: 1.5, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'
        >
          <h2 className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem] '>
            Better urban <br className='hidden tablet:inline' /> living
          </h2>
          <p className='font-body text-dim-grey'>
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
