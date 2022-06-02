import { Link } from "react-router-dom";

// images
import telemetryImg from "../../../assets/images/telemetry.jpg";
import nearYouImg from "../../../assets/images/near-you.jpg";
import paymentsImg from "../../../assets/images/payments.jpg";

// patterns
import leftDownwardArrow from "../../../assets/patterns/left-downward-arrow.svg";
import rightDownwardArrow from "../../../assets/patterns/right-downward-arrow.svg";

const Features = () => {
  return (
    <section className="flex w-[82.93%] flex-col items-center gap-[7.5rem] text-center">
      <div className="flex flex-col items-center gap-14">
        <div className="relative">
          <div>
            <img className="rounded-full" src={telemetryImg} alt="" />
          </div>
          <div className="absolute  bottom-0 h-[8.625rem] w-[45.938rem]">
            <img className="h-full w-full" src={leftDownwardArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
              Easy to use riding telemetry
            </h2>
            <p className="font-body text-dim-grey">
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
          </div>

          <Link className="btn" to="/about">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="relative">
          <div>
            <img className="rounded-full" src={nearYouImg} alt="" />
          </div>
          <div className="absolute  top-0 -left-[31.563rem] ">
            <img className="h-full w-full" src={rightDownwardArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
              Coming to a city near you
            </h2>
            <p className="font-body text-dim-grey">
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
          </div>

          <Link className="btn" to="/about">
            Learn More
          </Link>
        </div>
      </div>
      <div className="flex flex-col items-center gap-14">
        <div className="relative">
          <div>
            <img className="rounded-full" src={paymentsImg} alt="" />
          </div>
          <div className="absolute top-0 left-[8.125rem] h-[8.625rem] w-[45.938rem]">
            <img className="h-full w-full" src={leftDownwardArrow} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-center gap-8">
          <div className="flex flex-col items-center gap-8">
            <h2 className="font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
              Zero hassle payments
            </h2>
            <p className="font-body text-dim-grey">
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.
            </p>
          </div>

          <Link className="btn" to="/about">
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
