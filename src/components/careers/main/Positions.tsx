import { Link } from 'react-router-dom';

const Positions = () => {
  return (
    <section className='flex w-[82.93%] flex-col items-center gap-4 tablet:w-[89.71%]'>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy  tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            General Manager
          </h3>
          <p className='font-body text-dark-navy'>Jakarta, Indonesia</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            UI/UX Designer
          </h3>
          <p className='font-body text-dark-navy'>Yokohama, Japan</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            Blog Content Copywriter
          </h3>
          <p className='font-body text-dark-navy'>New York, United States</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            Graphic Designer
          </h3>
          <p className='font-body text-dark-navy'>New York, United States</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            Fleet Supervisor
          </h3>
          <p className='font-body text-dark-navy'>Jakarta, Indonesia</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
      <div className='flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center tablet:flex-row tablet:justify-between tablet:py-[2.125rem] tablet:px-12 tablet:text-left'>
        <div className='flex flex-col items-center gap-1 tablet:items-start tablet:gap-2'>
          <h3 className='font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:text-2xl tablet:leading-[1.75rem] tablet:tracking-[-1.07px]'>
            UX Analyst
          </h3>
          <p className='font-body text-dark-navy'>London, United Kingdom</p>
        </div>
        <Link className='btn w-[79.42%] tablet:w-[26.12%]' to=''>
          Apply
        </Link>
      </div>
    </section>
  );
};

export default Positions;
