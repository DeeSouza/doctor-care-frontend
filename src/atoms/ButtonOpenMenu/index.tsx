import { useMenu } from "../../contexts/MainContextProvider";
import { Button } from "./styles";

const ButtonOpenMenu = () => {
  const { handleToggleMenu, toggleMenu } = useMenu();
  console.log(toggleMenu);

  return (
    <Button
      type="button"
      title="Abrir Menu do Site"
      onClick={handleToggleMenu}
      animation={toggleMenu}
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
