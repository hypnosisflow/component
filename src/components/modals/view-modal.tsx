import React, { useContext } from "react";
import { ModalsContext } from "../../ModalContext";
import { Box, Text } from "grommet";

export const ViewModal = () => {
  const { activeItem } = useContext(ModalsContext);

  if (!activeItem) return;

  return (
    <Box gap="medium">
      <Text textAlign="center" weight={"bold"}>
        {activeItem.post.title}
      </Text>
      <Text textAlign="center" size="small">
        {activeItem.post.body}
      </Text>
    </Box>
  );
};
