import { Main } from "./styles";

type Props = {
  children: React.ReactNode;
};

const MasterTemplate = ({ children }: Props) => {
  return <Main>{children}</Main>;
};

export default MasterTemplate;
