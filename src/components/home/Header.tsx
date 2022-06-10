import rightArrow from "../../assets/patterns/right-arrow.svg";
import whiteCircles from "../../assets/patterns/white-circles.svg";

const Header = () => {
  return (
    <header className="relative mb-[7.5rem] flex w-full items-center justify-center pt-[7.188rem] pb-[11.188rem] text-center tablet:pb-[13.563rem] tablet:pt-[8.5rem]">
      <div className="flex max-w-[19.438rem] flex-col items-center gap-8 tablet:max-w-[35.813rem]">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-h3 tablet:font-h1 text-white">
            Scooter sharing made simple
          </h1>
          <p className="font-body text-white">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
        </div>

        <button className="btn">Get Scootin</button>
      </div>
      <div className="absolute left-[-19.5rem] top-[73.53%] h-[8.625rem] w-[27.938rem] tablet:left-[-7.938rem] tablet:top-[72.76%]">
        <img className="w-full" src={rightArrow} alt="" />
      </div>
      <div className="absolute right-[-1.938rem] top-[83.38%] hidden h-[3.938rem] w-[14.625rem] tablet:block">
        <img className="w-full" src={whiteCircles} alt="" />
      </div>
    </header>
  );
};

export default Header;
