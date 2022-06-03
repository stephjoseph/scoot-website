import { Link } from "react-router-dom";

const Positions = () => {
  return (
    <section className="flex w-[82.93%] flex-col items-center gap-4">
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            General Manager
          </h3>
          <p className="font-body text-dark-navy">Jakarta, Indonesia</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            UI/UX Designer
          </h3>
          <p className="font-body text-dark-navy">Yokohama, Japan</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            Blog Content Copywriter
          </h3>
          <p className="font-body text-dark-navy">New York, United States</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            Graphic Designer
          </h3>
          <p className="font-body text-dark-navy">New York, United States</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            Fleet Supervisor
          </h3>
          <p className="font-body text-dark-navy">Jakarta, Indonesia</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
      <div className="flex w-full flex-col items-center gap-4 bg-snow px-8 py-9 text-center">
        <div className="flex flex-col items-center gap-1">
          <h3 className="font-h3 text-lg leading-6 tracking-[-0.8px] text-dark-navy">
            UX Analyst
          </h3>
          <p className="font-body text-dark-navy">London, United Kingdom</p>
        </div>
        <Link className="btn w-[79.42%]" to="">
          Apply
        </Link>
      </div>
    </section>
  );
};

export default Positions;
