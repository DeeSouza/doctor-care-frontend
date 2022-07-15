import Footer from "organisms/Footer";
import Header from "organisms/Header";
import { MainContextProvider } from "contexts/MainContextProvider";

import { Main } from "./styles";

type Props = {
  children: React.ReactNode;
};

const MasterTemplate = ({ children }: Props) => {
  return (
    <MainContextProvider>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </MainContextProvider>
  );
};

export default MasterTemplate;
