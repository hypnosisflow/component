import { Box, Data, Cards, Card, CardBody, CardFooter, Text } from "grommet";
import { ButtonsGroup } from "../buttons-group/buttons-group";
import { View } from "../../models";

export const CardsView = ({ currentData }: View) => {
  return (
    <Box width={"xlarge"} margin={"auto"}>
      <Data data={currentData}>
        <Cards size="small" step={3}>
          {(item, index) => (
            <Card key={index} pad="small" gap="small">
              <CardBody gap="small">
                <Text>{item.id}</Text>
                <Text size="small" weight="bold">
                  {item.title}
                </Text>
                <Text size="xsmall">{item.body}</Text>
              </CardBody>

              <CardFooter>
                <ButtonsGroup post={item} />
              </CardFooter>
            </Card>
          )}
        </Cards>
      </Data>
    </Box>
  );
};
