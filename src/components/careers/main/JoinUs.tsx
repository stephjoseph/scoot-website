import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
// image
import joinUsImg from '../../../assets/images/join-us.jpg';

// pattern
import circle from '../../../assets/patterns/circle.svg';

const JoinUs = () => {
  return (
    <section className='mb-[7.5rem] flex w-[82.93%] flex-col items-center gap-14 text-center tablet:w-[74.60%] tablet:gap-16 desktop:flex-row-reverse desktop:gap-[13.75rem] desktop:text-left'>
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
          <img className='rounded-full' src={joinUsImg} alt='' />
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
      </motion.div>
    </section>
  );
};

export default JoinUs;
