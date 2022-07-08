import Footer from "../../organisms/Footer";
import Header from "../../organisms/Header";
import { Main } from "./styles";

type Props = {
  children: React.ReactNode;
};

const MasterTemplate = ({ children }: Props) => {
  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};

export default MasterTemplate;
