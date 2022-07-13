import Header from './about/Header';
import Main from './about/Main';

const About = () => {
  return (
    <div
      id='about'
      className='mb-[7.5rem] flex w-full flex-col items-center desktop:mb-[10rem]'
    >
      <Header />
      <Main />
    </div>
  );
};

export default About;
