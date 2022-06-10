import Features from "./main/Features";
import Steps from "./main/Steps";

function Main() {
  return (
    <main className="mb-[7.5rem] flex w-full flex-col items-center gap-[7.5rem] tablet:gap-[9.063rem]">
      <Steps />
      <Features />
    </main>
  );
}

export default Main;
