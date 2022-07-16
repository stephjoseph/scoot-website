import { motion } from 'framer-motion';

// images
import ourTechImg from '../../../assets/images/our-tech.jpg';
import ourIntegrityImg from '../../../assets/images/our-integrity.jpg';
import ourCommunityImg from '../../../assets/images/our-community.jpg';

const Values = () => {
  return (
    <section className='mb-[9.063rem] flex w-[82.93%] flex-col items-center gap-16 tablet:mb-[7.5rem] tablet:w-[59.50%] tablet:gap-[6.563rem] desktop:w-[77.08%] desktop:gap-12'>
      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
        viewport={{ once: true }}
        className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] text-dark-navy'
      >
        Why Join Us?
      </motion.h2>
      <div className='flex flex-col items-center gap-14 text-center desktop:flex-row desktop:gap-[1.875rem]'>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-4 tablet:gap-8 desktop:w-[31.53%]'
        >
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <div>
                <img className='rounded-full' src={ourTechImg} alt='' />
              </div>
              <div className='font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy'>
                01
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-[1.688rem]'>
            <h3 className='font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
              Our tech
            </h3>
            <p className='font-body text-dim-grey'>
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3, delay: 0.3 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-4 tablet:gap-8 desktop:w-[31.53%]'
        >
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <div>
                <img className='rounded-full' src={ourIntegrityImg} alt='' />
              </div>
              <div className='font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy'>
                02
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-[1.688rem]'>
            <h3 className='font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
              Our integrity
            </h3>
            <p className='font-body text-dim-grey'>
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -300 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', duration: 2, bounce: 0.3, delay: 0.6 }}
          viewport={{ once: true }}
          className='flex flex-col items-center gap-4 tablet:gap-8 desktop:w-[31.53%]'
        >
          <div className='flex flex-col items-center'>
            <div className='flex flex-col items-center'>
              <div>
                <img className='rounded-full' src={ourCommunityImg} alt='' />
              </div>
              <div className='font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy'>
                03
              </div>
            </div>
          </div>
          <div className='flex flex-col items-center gap-[1.688rem]'>
            <h3 className='font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy'>
              Our community
            </h3>
            <p className='font-body text-dim-grey'>
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Values;
