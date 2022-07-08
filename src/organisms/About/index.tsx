import Title from "../../atoms/Title";
import { Section } from "./styles";

import imageAboutUs from "../../assets/doctor-care-quem-somos-e-porque-existimos.png";

const About = () => {
  return (
    <Section>
      <div>
        <Title title="SOBRE NÓS" />
        <p>Entenda quem somos e por que existimos</p>
        <div>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Amet minim mollit non
          deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
          consequat duis enim. Amet minim mollit non deserunt ullamco est sit
          aliqua dolor do amet sint. Velit officia consequat duis enim. Amet
          minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
          Velit officia consequat duis enim. Amet minim mollit non deserunt
          ullamco est sit aliqua dolor do amet sint.
        </div>
      </div>

      <div>
        <img
          src={imageAboutUs}
          alt="Um médico sorrindo atendendo uma mãe e um filhinho pequeno no colo que também estão sorrindo."
        />
      </div>
    </Section>
  );
};

export default About;
