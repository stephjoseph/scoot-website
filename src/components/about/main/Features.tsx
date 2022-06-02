// images
import digitalEraImg from "../../../assets/images/digital-era.jpg";
import betterLivingImg from "../../../assets/images/better-living.jpg";

// patterns
import leftUpwardArrow from "../../../assets/patterns/left-upward-arrow.svg";
import rightDownwardArrow from "../../../assets/patterns/right-downward-arrow.svg";

const Features = () => {
  return (
    <section className="flex w-[82.93%] flex-col items-center gap-[7.5rem]">
      <div className="flex flex-col items-center gap-14 text-center">
        <div className="relative">
          <div>
            <img className="rounded-full" src={digitalEraImg} alt="" />
          </div>
          <div className="absolute top-[8.313rem] w-[45.938rem]">
            <img className="absolute" src={leftUpwardArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
            Mobility for the digital era
          </h2>
          <p className="font-body text-dim-grey">
            Getting around should be simple (and even fun!) for everyone. We
            embrace technology to provide low cost, smart access to scooters at
            your fingertips.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14 text-center">
        <div className="relative">
          <div>
            <img className="rounded-full" src={betterLivingImg} alt="" />
          </div>
          <div className="absolute top-0 right-0 w-[45.938rem]">
            <img className="absolute" src={rightDownwardArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
            Better urban living
          </h2>
          <p className="font-body text-dim-grey">
            We’re helping connect cities and bring people closer together. Our
            scooters are also fully-electric and we offset the minimal carbon
            footprint for each ride.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Features;
