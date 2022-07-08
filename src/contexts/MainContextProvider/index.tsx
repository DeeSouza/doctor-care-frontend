import { useContext, createContext, useState } from "react";

type MainContextData = {
  handleToggleMenu: () => void;
  toggleMenu: boolean;
};

type MainContextProps = {
  children: React.ReactNode;
};

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProps) => {
  const [toggleMenu, setToggleMenu] = useState(false);

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
