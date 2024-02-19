import React from "react";

import {
  Box,
  // Data,
  // DataSearch,
  // DataTable,
  // Toolbar,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from "grommet";

import { ButtonsGroup } from "../buttons-group/buttons-group";
import { View } from "../../models";

export const TableView = ({ currentData }: View) => {
  return (
    <Box
      align="center"
      direction="row"
      justify="center"
      width={"large"}
      margin={"auto"}
    >
      {/* <Data data={currentData} toolbar="filters" width={"large"}>
        <DataTable
          alignSelf="start"
          columns={[
            {
              property: "id",
              header: <Text>ID</Text>,
              primary: true,
            },
            {
              property: "title",
              header: <Text>Title</Text>,
              primary: true,
            },
            {
              property: "body",
              header: <Text>Body</Text>,
              primary: true,
            },
          ]}
        />
      </Data> */}

      <Table width={"large"}>
        <TableHeader>
          <TableRow>
            <TableCell scope="col" border="bottom">
              ID
            </TableCell>
            <TableCell scope="col" border="bottom">
              Title
            </TableCell>
            <TableCell scope="col" border="bottom">
              Body
            </TableCell>
            <TableCell scope="col" border="bottom"></TableCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          {currentData.map((item) => (
            <TableRow key={item.id}>
              <TableCell scope="row">
                <Text size="small" weight={"bold"}>
                  {item.id}
                </Text>
              </TableCell>
              <TableCell>
                <Text size="small" weight={"bold"}>
                  {item.title}
                </Text>
              </TableCell>
              <TableCell>
                <Text size="small">{item.body}</Text>
              </TableCell>

              <ButtonsGroup post={item} />
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Box>
  );
};
