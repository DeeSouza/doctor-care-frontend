import { useMenu } from "contexts/MainContextProvider";
import { Button } from "./styles";

const ButtonOpenMenu = () => {
  const { handleToggleMenu, toggleMenu, fixedMenu } = useMenu();

  return (
    <Button
      type="button"
      title="Abrir Menu do Site"
      onClick={handleToggleMenu}
      aria-label="Abrir Menu do Site"
      animation={toggleMenu}
      fixedMenu={fixedMenu}
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
