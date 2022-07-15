import { useContext, createContext, useState } from "react";

interface MainContextData {
  handleToggleMenu: () => void;
  toggleMenu: string;
}

interface MainContextProps {
  children: React.ReactNode;
}

type AnimationButton = "opened" | "closed" | "";

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProps) => {
  const [toggleMenu, setToggleMenu] = useState<AnimationButton>("");

  function handleToggleMenu() {
    setToggleMenu((state) => (state === "opened" ? "closed" : "opened"));
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
