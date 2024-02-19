import React from "react";
import { Box, Button, Layer } from "grommet";
import { SuperModalProps } from "../../models";

export const SuperModal = ({ setter, children }: SuperModalProps) => {
  return (
    <Layer onEsc={() => setter()} onClickOutside={() => setter()}>
      <Box pad="small" height={"medium"} width={"medium"}>
        {children}
      </Box>
      <Button margin="small" label="Закрыть" onClick={() => setter()} />
    </Layer>
  );
};
