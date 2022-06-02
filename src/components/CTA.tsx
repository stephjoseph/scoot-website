import { Link } from "react-router-dom";

import appStoreSmallIcon from "../assets/icons/app-store-small.svg";
import googlePlaySmallIcon from "../assets/icons/google-play-small.svg";

const CTA = () => {
  return (
    <section
      className="flex w-full flex-col items-center gap-10 bg-dark-navy py-[5.5rem] text-center"
      id="CTA"
    >
      <h2 className="w-[82.93%]  font-['Space_Mono'] text-[2rem] leading-[2rem] tracking-[-1.43px] text-white">
        Sign up and Scoot off today
      </h2>
      <div className="flex items-center gap-[0.813rem]">
        <Link className="h-10 w-[7.098rem]" to="">
          <img src={appStoreSmallIcon} alt="" />
        </Link>
        <Link className="h-10 w-[8.125rem]" to="">
          <img src={googlePlaySmallIcon} alt="" />
        </Link>
      </div>
    </section>
  );
};

export default CTA;
