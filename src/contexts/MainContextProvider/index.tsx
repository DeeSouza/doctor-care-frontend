import { useContext, createContext, useState, useEffect } from "react";

interface MainContextProps {
  children: React.ReactNode;
}

export type AnimationButton = boolean | undefined;
export type FixedMenu = boolean | undefined;

interface MainContextData {
  handleToggleMenu: () => void;
  toggleMenu: AnimationButton;
  fixedMenu: FixedMenu;
}

export const MainContext = createContext({} as MainContextData);

export const MainContextProvider = ({ children }: MainContextProps) => {
  const [toggleMenu, setToggleMenu] = useState<AnimationButton>(undefined);
  const [fixedMenu, setFixedMenu] = useState<FixedMenu>(undefined);

  function fixedNavInTop() {
    const scrollTopWindow = window.pageYOffset;

    if (scrollTopWindow >= 150) {
      setFixedMenu(true);
    } else {
      setFixedMenu(false);
    }
  }

  function handleToggleMenu() {
    const scrollTopWindow = window.pageYOffset;

    setToggleMenu((state) => {
      if (state && scrollTopWindow >= 150) {
        setToggleMenu(undefined);

        return;
      }

      return !state;
    });
  }

  useEffect(() => {
    window.addEventListener("scroll", fixedNavInTop);

    return () => {
      window.removeEventListener("scroll", fixedNavInTop);
    };
  }, []);

  useEffect(() => {
    const bodyElement = document.querySelector("body");

    if (!bodyElement) {
      return;
    }

    if (toggleMenu) {
      bodyElement.classList.add("no-scrollbars");
    } else {
      bodyElement.classList.remove("no-scrollbars");
    }
  }, [toggleMenu]);

  return (
    <MainContext.Provider
      value={{
        handleToggleMenu,
        toggleMenu,
        fixedMenu,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

export const useMenu = () => useContext(MainContext);
