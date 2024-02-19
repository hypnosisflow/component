import { Button, CheckBox, Text, Box, Layer } from "grommet";
import React, { useState } from "react";
import { FiltersProps, Post } from "../../models";

export const Filters = ({ dataArray, setCurrentData }: FiltersProps) => {
  const [checked, setChecked] = useState<Array<string>>([]);
  const checkboxes = ["id > 10", "id < 30"];

  const [additionalIsOpened, setAdditionalIsOpened] = useState(false);
  const additionCheckboxes = ["user id > 5", "user id < 5"];

  //   в моем случае я не придумал как без копипасты. посты наверно не удачный объект для теста, если были бы флаги типа isCompleted, isOnline можно было ды сделать перебором по ключам и значениям.

  const handleDataFilters = (filters: Array<string>, data: Array<Post>) => {
    let copyArr = data;

    for (let i = 0; i < filters.length; i++) {
      if (filters[i] === "id > 10") {
        copyArr = copyArr.filter((item) => item.id > 10);
      } else if (filters[i] === "id < 30") {
        copyArr = copyArr.filter((item) => item.id < 30);
      } else if (filters[i] === "user id > 5") {
        copyArr = copyArr.filter((item) => item.userId > 5);
      } else if (filters[i] === "user id < 5") {
        copyArr = copyArr.filter((item) => item.userId < 5);
      }
    }

    setCurrentData([...copyArr]);
  };

  const handleReset = () => {
    setChecked([]);
    setCurrentData(dataArray);
  };

  const handleCheck = (
    event: React.ChangeEvent<HTMLInputElement>,
    value: string
  ) => {
    if (event.target.checked) {
      setChecked([...checked, value]);
    } else {
      setChecked(checked.filter((item) => item !== value));
    }
  };

  const handleToggleAdditional = () => {
    setAdditionalIsOpened(!additionalIsOpened);
  };

  return (
    <Box
      width={"medium"}
      gap="small"
      justify="center"
      align="center"
      margin={"auto"}
    >
      {checkboxes.map((item) => (
        <CheckBox
          key={item}
          checked={checked.includes(item)}
          label={item}
          onChange={(e) => handleCheck(e, item)}
        />
      ))}

      <Button hoverIndicator="light-1" onClick={handleReset} size="">
        <Text margin={""}>Сбросить</Text>
      </Button>

      <Button hoverIndicator="light-1" onClick={handleToggleAdditional} size="">
        <Text margin={""}>Другие фильтры</Text>
      </Button>
      <Button
        hoverIndicator="light-1"
        onClick={() => handleDataFilters(checked, dataArray)}
        size=""
      >
        <Text margin={""}>Применить</Text>
      </Button>

      {additionalIsOpened && (
        <Layer
          onEsc={handleToggleAdditional}
          onClickOutside={handleToggleAdditional}
        >
          <Box pad="small" height={"medium"} gap="medium" width={"medium"}>
            {additionCheckboxes.map((item) => (
              <CheckBox
                key={item}
                checked={checked.includes(item)}
                label={item}
                onChange={(e) => handleCheck(e, item)}
              />
            ))}
          </Box>
          <Button
            margin="small"
            label="close"
            onClick={handleToggleAdditional}
          />
        </Layer>
      )}
    </Box>
  );
};
