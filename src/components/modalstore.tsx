import React, { useContext } from "react";
import { ModalsContext } from "../ModalContext";
import { DeleteModal } from "./modals/delete-modal";
import { ViewModal } from "./modals/view-modal";
import { SuperForm } from "./super-form/super-form";
import { SuperModal } from "./super-modal/super-modal";

// я помню про успловие не плодить копипасты. пытался попробовать сделать с кастомным хуком useModal, не мог организовать динамический роутинг.
// для динамического рендера модалок, наверное лучше будет использовать react-router-dom + константу где хранить модалки.
// решил организовать модалки через контекст хотябы для простоты)

export const ModalStore = () => {
  const {
    addIsOpened,
    handleAddModalToggle,
    deleteIsOpened,
    handleDeleteModalToggle,
    updateIsOpened,
    handleUpdateModalToggle,
    getIsOpened,
    handleGetModalToggle,
  } = useContext(ModalsContext);

  return (
    <>
      {addIsOpened && (
        <SuperModal setter={handleAddModalToggle} children={<SuperForm />} />
      )}
      {deleteIsOpened && (
        <SuperModal
          setter={handleDeleteModalToggle}
          children={<DeleteModal />}
        />
      )}
      {updateIsOpened && (
        <SuperModal
          setter={handleUpdateModalToggle}
          children={<SuperForm edit={true} />}
        />
      )}
      {getIsOpened && (
        <SuperModal setter={handleGetModalToggle} children={<ViewModal />} />
      )}
    </>
  );
};
