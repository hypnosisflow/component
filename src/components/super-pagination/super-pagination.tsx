import { Box, Pagination, Text } from "grommet";
import React, { useState } from "react";
import { SuperPaginationProps } from "../../models";

export const SuperPaginaiton = ({
  dataArray,
  setCurrentData,
}: SuperPaginationProps) => {
  const [indices, setIndices] = useState([0, 10]);

  const handleChangePagination = ({
    startIndex,
    endIndex,
  }: {
    startIndex: number;
    endIndex: number;
  }) => {
    const nextData = dataArray?.slice(startIndex, endIndex);
    setCurrentData(nextData);
    setIndices([startIndex, Math.min(endIndex, dataArray?.length)]);
  };

  return (
    <Box align="center" direction="row" justify="center">
      <Text>
        Showing {indices[0] + 1} - {indices[1]} of {dataArray.length}
      </Text>
      <Pagination
        numberItems={dataArray.length}
        onChange={handleChangePagination}
      />
    </Box>
  );
};
