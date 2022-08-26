import { useMenu } from "contexts/MainContextProvider";
import { Container } from "./styles";

interface Props {
  children: React.ReactNode;
}

const Main = ({ children }: Props) => {
  const { fixedMenu } = useMenu();

  return <Container fixedMenu={fixedMenu}>{children}</Container>;
};

export default Main;
