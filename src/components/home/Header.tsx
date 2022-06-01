import rightArrow from "../../assets/patterns/right-arrow.svg";

const Header = () => {
  return (
    <header className="relative flex items-center justify-center pt-[7.188rem] pb-[11.188rem] text-center">
      <div className="flex max-w-[19.438rem] flex-col items-center gap-8">
        <div className="flex flex-col items-center gap-6">
          <h1 className="font-h3 text-white">Scooter sharing made simple</h1>
          <p className="font-body text-white">
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
        </div>

        <button className="btn">Get Scootin</button>
      </div>
      <div className="absolute left-[-19.5rem] top-[73.53%] h-[9.438rem] w-[28.25rem]">
        <img className="w-full" src={rightArrow} alt="" />
      </div>
    </header>
  );
};

export default Header;
