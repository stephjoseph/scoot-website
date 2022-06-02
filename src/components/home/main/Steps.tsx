import locateIcon from "../../../assets/icons/locate.svg";
import scooterIcon from "../../../assets/icons/scooter.svg";
import rideIcon from "../../../assets/icons/ride.svg";

const Steps = () => {
  return (
    <section className="flex w-[82.93%] flex-col items-center gap-12">
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="h-[3.5rem] w-[3.5rem]">
          <img src={locateIcon} alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-h5 text-dark-navy">Locate with app</h3>
          <p className="font-body text-dim-grey">
            Use the app to find the nearest scooter to you. We are continuously
            placing scooters in the areas with most demand, so one should never
            be too far away.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="h-[3.5rem] w-[3.5rem]">
          <img src={scooterIcon} alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-h5 text-dark-navy">Pick your scooter</h3>
          <p className="font-body text-dim-grey">
            We show the most important info for the scooters closest to you. So
            you know how much charge they have left and can see roughly how much
            it will cost.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-6 text-center">
        <div className="h-[3.5rem] w-[3.5rem]">
          <img src={rideIcon} alt="" />
        </div>
        <div className="flex flex-col gap-6">
          <h3 className="font-h5 text-dark-navy">Enjoy the ride</h3>
          <p className="font-body text-dim-grey">
            Scan the QR code and the bike will unlock. Retract the cable lock,
            put on a helmet, and you’re off! Always lock bikes away from
            walkways and accessibility ramps.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Steps;
