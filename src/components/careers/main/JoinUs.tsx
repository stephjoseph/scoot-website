import { Link } from "react-router-dom";

// image
import joinUsImg from "../../../assets/images/join-us.jpg";

// pattern
import leftDownwardArrow from "../../../assets/patterns/left-downward-arrow.svg";

const JoinUs = () => {
  return (
    <section className="mb-[7.5rem] flex w-[82.93%] flex-col items-center gap-14">
      <div className="relative">
        <div>
          <img className="rounded-full" src={joinUsImg} alt="" />
        </div>
        <div className="absolute bottom-0 left-0 w-[45.938rem]">
          <img className="h-full w-full" src={leftDownwardArrow} alt="" />
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 text-center">
        <h2 className="font-h2 text-[2rem] leading-[2rem] tracking-[-1.43px] text-dark-navy">
          Care to join our mission?
        </h2>
        <p className="font-body text-dim-grey">
          We’re always looking for ambitious individuals to help us on our
          journey. If you’re passionate about our mission to provide clean,
          accessible transport to improve urban living we want to hear from you!
        </p>
        <Link className="btn" to="">
          Say Hello
        </Link>
      </div>
    </section>
  );
};

export default JoinUs;
