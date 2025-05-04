// import './App.css'
import HeroGradient from './components/heroSection/HeroGradient';
import HeroMain from './components/heroSection/HeroMain';
import NavbarMain from "./components/navBar/NavbarMain";
import SubHeroSection from './components/heroSection/SubHeroSection';
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import HelperSection from './components/HelperSection';
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import ToolsMain from './components/toolsSection/ToolsMain';
import ProjectsMain from './components/ProjectSection/ProjectsMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import FooterMain from './components/footer/FooterMain';


function App() {
  return (
    <main className="font-body">
      <NavbarMain />
      <HeroMain/>
      <HeroGradient/>
      <SubHeroSection/>
      <AboutMeMain/>
      <HelperSection/>
      <SkillsMain/>
      <SubSkills/>
      <ToolsMain/> 
      <ProjectsMain/>
      <ContactMeMain/>
      <FooterMain/>
    </main>
  );
};

export default App;