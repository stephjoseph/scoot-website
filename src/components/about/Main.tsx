import FAQ from "./main/FAQ";
import Features from "./main/Features";
import Values from "./main/Values";

const Main = () => {
  return (
    <main className="flex w-full flex-col items-center gap-[7.5rem]">
      <Features />
      <Values />
      <FAQ />
    </main>
  );
};

export default Main;
