import CountUp from "@/components/react-bits/count-up";
import MainStack from "./components/MainStack";
import Techs from "./components/Techs";
import Experience from "@/components/sections/experience";
import Education from "@/components/sections/education";
import Projects from "@/components/sections/projects";
import Contact from "@/components/sections/contact";

export default function Page() {
  const yearsOfExperiencie = new Date().getFullYear() - 2017;
  return (
    <>
      <h1 className="text-center text-5xl font-bold uppercase sm:text-6xl lg:text-start xl:text-7xl">
        Ingeniero de <span className="text-(--chart-4)">Software</span>
      </h1>
      <h2 className="mt-4 text-justify text-[1rem] sm:text-[1.25rem] xl:text-start">
        Apasionado por la construcción de excelentes apliaciones web intuitivas
        con experiencia de usuario profesional.
      </h2>
      <div className="mt-5 flex items-center gap-4">
        <span className="text-6xl font-bold sm:text-8xl">
          +<CountUp to={yearsOfExperiencie} delay={1} />
        </span>
        <span className="text-[0.9rem] sm:text-2xl">
          años de experiencia desarrollando software profesional.
        </span>
      </div>
      <MainStack />
      <Techs />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </>
  );
}
