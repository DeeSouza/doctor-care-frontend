import Footer from "organisms/Footer";
import Header from "organisms/Header";
import Main from "organisms/Main";

import { MainContextProvider } from "contexts/MainContextProvider";

interface Props {
  children: React.ReactNode;
}

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
