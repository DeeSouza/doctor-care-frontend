import { Heading } from "./styles";

type Props = {
  title: string;
};

const Title = ({ title }: Props) => {
  return <Heading>{title}</Heading>;
};

export default Title;
