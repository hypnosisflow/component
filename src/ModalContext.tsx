import { createContext, useState } from "react";
import { Item } from "./models";

export type ModalsContextType = {
  addIsOpened: boolean;
  handleAddModalToggle: () => void;
  deleteIsOpened: boolean;
  handleDeleteModalToggle: (item?: Item) => void;
  updateIsOpened: boolean;
  handleUpdateModalToggle: (item?: Item) => void;
  getIsOpened: boolean;
  handleGetModalToggle: (item?: Item) => void;
  activeItem: Item | undefined;
};

export const ModalsContext = createContext<ModalsContextType>({
  addIsOpened: false,
  handleAddModalToggle: () => {},
  deleteIsOpened: false,
  handleDeleteModalToggle: () => {},
  updateIsOpened: false,
  handleUpdateModalToggle: () => {},
  getIsOpened: false,
  handleGetModalToggle: () => {},
  activeItem: undefined,
});

interface Props {
  children: React.ReactNode;
}

export const ModalsContextWrapper = ({ children }: Props) => {
  const [addIsOpened, setAddIsOpened] = useState(false);
  const [deleteIsOpened, setDeleteIsOpened] = useState(false);
  const [updateIsOpened, setUpdateIsOpened] = useState(false);
  const [getIsOpened, setGetIsOpened] = useState(false);

  const [activeItem, setActiveItem] = useState<Item>();

  const handleAddModalToggle = () => {
    setAddIsOpened(!addIsOpened);
  };

  const handleDeleteModalToggle = (item?: Item) => {
    setDeleteIsOpened(!deleteIsOpened);
    setActiveItem(item);
  };
  const handleUpdateModalToggle = (item?: Item) => {
    setUpdateIsOpened(!updateIsOpened);
    setActiveItem(item);
  };
  const handleGetModalToggle = (item?: Item) => {
    setGetIsOpened(!getIsOpened);
    setActiveItem(item);
  };

  return (
    <ModalsContext.Provider
      value={{
        addIsOpened,
        handleAddModalToggle,
        deleteIsOpened,
        handleDeleteModalToggle,
        updateIsOpened,
        handleUpdateModalToggle,
        getIsOpened,
        handleGetModalToggle,
        activeItem,
      }}
    >
      {children}
    </ModalsContext.Provider>
  );
};
