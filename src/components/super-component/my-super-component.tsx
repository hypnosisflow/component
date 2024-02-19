import React, { useContext, useEffect, useState } from "react";

import { Box, Button, Text } from "grommet";

import { CardsView } from "../cards-view/cards-view";
import { TableView } from "../table-view/table-view";
import { SuperPaginaiton } from "../super-pagination/super-pagination";
import { ModalsContext } from "../../ModalContext";
import { MySuperComponentProps, Post } from "../../models";
import { Filters } from "../filters/filters";

export const MySuperComponent = ({ posts, options }: MySuperComponentProps) => {
  const [currentData, setCurrentData] = useState(posts?.slice(0, 10));
  const [filtered, setFiltered] = useState<Array<Post>>([]);

  // при фильтрации ломало пагинацию, удалось решить только этим.
  useEffect(() => {
    if (filtered.length > 1) {
      setCurrentData(filtered.slice(0, 10));
    }
  }, [filtered]);

  const { handleAddModalToggle } = useContext(ModalsContext);

  return (
    <Box gap="medium">
      {options.filters && (
        <Filters dataArray={posts} setCurrentData={setFiltered} />
      )}

      {options.view === "cards" ? (
        <CardsView currentData={currentData} />
      ) : (
        <TableView currentData={currentData} />
      )}

      {options.pagination && (
        <SuperPaginaiton
          setCurrentData={setCurrentData}
          dataArray={filtered.length > 1 ? filtered : posts}
        />
      )}

      <Button
        hoverIndicator="light-1"
        onClick={() => handleAddModalToggle()}
        margin={"auto"}
        size="medium"
      >
        <Text margin={"medium"}>Добавить</Text>
      </Button>
    </Box>
  );
};
