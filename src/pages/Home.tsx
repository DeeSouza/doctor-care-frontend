import About from "../organisms/About";
import Contact from "../organisms/Contact";
import Intro from "../organisms/Intro";
import Services from "../organisms/Services";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <About />
      <Contact />
    </div>
  );
};

export default Home;
