import About from "./components/about";
import Education from "./components/education";
import Experience from "./components/experience";
import Linx from "./components/linx";
import Projects from "./components/projects";
import Skills from "./components/skills";

export default function Home() {
    return (
      <div className="w-full h-full pb-10">
        <About/>
        <Linx/>
        <Experience/>
        <Projects/>
        <Education/>
        <Skills/>
      </div>
    );
  }
  