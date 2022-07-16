import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// images
import telemetryImg from '../../../assets/images/telemetry.jpg';
import nearYouImg from '../../../assets/images/near-you.jpg';
import paymentsImg from '../../../assets/images/payments.jpg';

// patterns
import leftDownwardArrow from '../../../assets/patterns/left-downward-arrow.svg';
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
              duration: 1,
              bounce: 0.3,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img className='rounded-full' src={telemetryImg} alt='' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
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
              duration: 1,
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
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'
        >
          <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:items-start desktop:gap-6'>
            <h2 className="tablet:font-h2 font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem]">
              Easy to use riding telemetry
            </h2>
            <p className='font-body text-dim-grey'>
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
          </div>

          <Link className='btn' to='/about'>
            Learn More
          </Link>
        </motion.div>
      </div>
      <div className='flex flex-col items-center gap-14 desktop:flex-row desktop:gap-[13.75rem]'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, x: -300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
              bounce: 0.3,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img className='rounded-full' src={nearYouImg} alt='' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -250 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
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
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'
        >
          <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:items-start desktop:gap-6'>
            <h2 className="tablet:font-h2 font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem]">
              Coming to a city near you
            </h2>
            <p className='font-body text-dim-grey'>
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
          </div>

          <Link className='btn' to='/about'>
            Learn More
          </Link>
        </motion.div>
      </div>
      <div className='flex flex-col items-center gap-14 desktop:flex-row-reverse desktop:gap-[13.75rem]'>
        <div className='relative'>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
              bounce: 0.3,
              delay: 0.15,
            }}
            viewport={{ once: true }}
          >
            <img className='rounded-full' src={paymentsImg} alt='' />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              type: 'spring',
              duration: 1,
              bounce: 0.3,
              delay: 0.3,
            }}
            viewport={{ once: true }}
            className='absolute top-0 left-[8.125rem] z-10 h-[8.625rem] w-[45.938rem] tablet:left-[248px] tablet:top-[85px]'
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
              duration: 1,
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
          transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-8 tablet:gap-10 desktop:w-[40.09%] desktop:items-start'
        >
          <div className='flex flex-col items-center gap-8 tablet:gap-10 desktop:items-start desktop:gap-6'>
            <h2 className="tablet:font-h2 font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy tablet:max-w-[28.563rem]">
              Zero hassle payments
            </h2>
            <p className='font-body text-dim-grey'>
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
          </div>

          <Link className='btn' to='/about'>
            Learn More
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
