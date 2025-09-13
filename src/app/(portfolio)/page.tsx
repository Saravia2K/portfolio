import CountUp from "@/components/react-bits/count-up";
import MainStack from "./components/MainStack";
import Techs from "./components/Techs";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";

export default function Page() {
  const yearsOfExperiencie = new Date().getFullYear() - 2017;
  return (
    <>
      <h1 className="text-7xl font-bold uppercase">
        Ingeniero de <span className="text-(--chart-4)">Software</span>
      </h1>
      <h2 className="mt-4 text-[1.25rem]">
        Apacionado por la construcción de excelentes apliaciones web intuitivas
        con experiencia de usuario profesional.
      </h2>
      <div className="mt-5 flex items-center gap-4 text-2xl">
        <span className="text-8xl font-bold">
          +<CountUp to={yearsOfExperiencie} delay={1} />
        </span>
        <span>años de experiencia desarrollando software profesional.</span>
      </div>
      <MainStack />
      <Techs />
      <Education />
      <Experience />
    </>
  );
}
