import { useMenu } from "../../contexts/MainContextProvider";
import { Button } from "./styles";

const ButtonOpenMenu = () => {
  const { handleToggleMenu, toggleMenu } = useMenu();

  return (
    <Button
      type="button"
      title="Abrir Menu do Site"
      onClick={handleToggleMenu}
      display={toggleMenu}
      aria-label="Abrir Menu do Site"
    >
      <div>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </Button>
  );
};

export default ButtonOpenMenu;
