import JoinUs from "./main/JoinUs";
import Positions from "./main/Positions";
import WhyJoinUs from "./main/WhyJoinUs";

const Main = () => {
  return (
    <main className="flex w-full flex-col items-center">
      <JoinUs />
      <WhyJoinUs />
      <Positions />
    </main>
  );
};

export default Main;
