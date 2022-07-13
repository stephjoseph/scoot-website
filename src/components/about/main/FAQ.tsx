import { useState } from 'react';

import data from './data';
import chevronIcon from '../../../assets/icons/chevron.svg';

const FAQ = () => {
  const [selected, setSelected] = useState<number | null>(0);
  const [selected2, setSelected2] = useState<number | null>(0);

  const toggle = (i: number) => {
    selected === i ? setSelected(null) : setSelected(i);
  };

  const toggle2 = (i: number) => {
    selected2 === i ? setSelected2(null) : setSelected2(i);
  };

  const logging = () => {
    console.log(data.faq1.map((item) => item.question));
  };
  return (
    <section className='flex w-[82.93%] flex-col items-center gap-12 tablet:w-[89.71%] tablet:gap-16 desktop:w-[77.08%] desktop:gap-16'>
      <h2
        onClick={logging}
        className='font-h2 tablet:font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy'
      >
        FAQs
      </h2>
      <div className='flex w-full flex-col items-center gap-12 desktop:gap-16'>
        <div className='flex flex-col items-center gap-8 desktop:flex-row desktop:items-start desktop:gap-[1.875rem]'>
          <h3 className='font-h3 tablet:font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy desktop:w-[31.53%]'>
            How it works
          </h3>
          <div className='flex flex-col items-center gap-4 tablet:gap-6 desktop:w-[65.77%] desktop:gap-4'>
            {data.faq1.map((item, i) => (
              <div
                className='flex w-full flex-col bg-snow p-8'
                key={item.id.toString()}
              >
                <div
                  className='flex items-center justify-between'
                  onClick={() => toggle(i)}
                >
                  <h4 className='font-h4 tablet:font-h4 max-w-[13.688rem] cursor-pointer text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:max-w-full'>
                    {item.question}
                  </h4>
                  <div
                    className={`${
                      selected === i ? 'rotate-180' : ''
                    } cursor-pointer transition-[transform] duration-300 ease-in`}
                  >
                    <img src={chevronIcon} alt='' />
                  </div>
                </div>
                <p className={`${selected === i ? 'answer show' : 'answer'}`}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className='flex flex-col items-center gap-8 desktop:flex-row desktop:items-start desktop:gap-[1.875rem]'>
          <h3 className='font-h3 tablet:font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy desktop:w-[31.53%]'>
            Safe driving
          </h3>
          <div className='flex flex-col items-center gap-4 desktop:w-[65.77%] desktop:gap-4'>
            {data.faq2.map((item, i) => (
              <div
                className='flex flex-col bg-snow p-8'
                key={item.id.toString()}
              >
                <div
                  className='flex items-center justify-between'
                  onClick={() => toggle2(i)}
                >
                  <h4 className='font-h4 tablet:font-h4 max-w-[13.688rem] cursor-pointer text-lg leading-6 tracking-[-0.8px] text-dark-navy tablet:max-w-full'>
                    {item.question}
                  </h4>
                  <div
                    className={`${
                      selected2 === i ? 'rotate-180' : ''
                    } cursor-pointer transition-[transform] duration-300 ease-in`}
                  >
                    <img src={chevronIcon} alt='' />
                  </div>
                </div>
                <p className={`${selected2 === i ? 'answer show' : 'answer'}`}>
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
