import React, { useContext } from "react";
import { Button, Box } from "grommet";
import { FormEdit, FormView, Trash } from "grommet-icons";

import { ModalsContext } from "../../ModalContext";
import { Item } from "../../models";

export const ButtonsGroup = (post: Item) => {
  const {
    handleDeleteModalToggle,
    handleGetModalToggle,
    handleUpdateModalToggle,
  } = useContext(ModalsContext);

  return (
    <Box direction="row" justify="between" width={"100%"}>
      <Button
        icon={<FormView color="plain" />}
        hoverIndicator
        onClick={() => handleGetModalToggle(post)}
      />
      <Button
        icon={<FormEdit color="plain" />}
        hoverIndicator
        onClick={() => handleUpdateModalToggle(post)}
      />
      <Button
        icon={<Trash color="red" />}
        hoverIndicator
        onClick={() => handleDeleteModalToggle(post)}
      />
    </Box>
  );
};
