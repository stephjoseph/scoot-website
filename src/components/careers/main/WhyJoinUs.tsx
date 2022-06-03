import ourTechImg from "../../../assets/images/our-tech.jpg";
import ourIntegrityImg from "../../../assets/images/our-integrity.jpg";
import ourCommunityImg from "../../../assets/images/our-community.jpg";

const WhyJoinUs = () => {
  return (
    <section className="mb-[9.063rem] flex w-[82.93%] flex-col items-center gap-16">
      <h2 className="font-h2 text-[2rem] leading-[2rem] text-dark-navy">
        Why Join Us?
      </h2>
      <div className="flex flex-col items-center gap-14 text-center">
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div>
                <img className="rounded-full" src={ourTechImg} alt="" />
              </div>
              <div className="font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy">
                01
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[1.688rem]">
            <h3 className="font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy">
              Our tech
            </h3>
            <p className="font-body text-dim-grey">
              We’re using cutting edge technology to drive accessible urban
              transportation forward. Our fully electric scooters are a joy to
              ride!
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div>
                <img className="rounded-full" src={ourIntegrityImg} alt="" />
              </div>
              <div className="font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy">
                02
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[1.688rem]">
            <h3 className="font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy">
              Our integrity
            </h3>
            <p className="font-body text-dim-grey">
              We are fully committed to deliver a great yet safe, sustainable
              micro-mobility experience in every city we serve.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-4">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <div>
                <img className="rounded-full" src={ourCommunityImg} alt="" />
              </div>
              <div className="font-h4 -mt-12 flex h-24 w-24 items-center justify-center rounded-full bg-yellow text-center text-dark-navy">
                03
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-[1.688rem]">
            <h3 className="font-h3 text-2xl leading-[1.75rem] tracking-[-1.07px] text-dark-navy">
              Our community
            </h3>
            <p className="font-body text-dim-grey">
              We support every community we serve. All workers are paid a living
              wage based on their location and are Scoot employees.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoinUs;
