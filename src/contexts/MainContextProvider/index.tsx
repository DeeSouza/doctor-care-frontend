import { useContext, createContext, useState } from "react";

interface MainContextProps {
  children: React.ReactNode;
}

export type AnimationButton = boolean | undefined;

interface MainContextData {
  handleToggleMenu: () => void;
  toggleMenu: AnimationButton;
}

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProps) => {
  const [toggleMenu, setToggleMenu] = useState<AnimationButton>(undefined);

  function handleToggleMenu() {
    setToggleMenu((state) => !state);
  }

  return (
    <MainContext.Provider
      value={{
        handleToggleMenu,
        toggleMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);
