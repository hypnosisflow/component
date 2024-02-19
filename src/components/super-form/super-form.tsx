import {
  Box,
  Button,
  Form,
  FormField,
  TextInput,
  TextArea,
  Text,
} from "grommet";
import React, { useContext, useEffect, useState } from "react";
import { createPost, updatePost } from "../../api";
import { ModalsContext } from "../../ModalContext";
import { Post } from "../../models";

interface SuperForm {
  edit?: boolean;
}

export const SuperForm = ({ edit = false }: SuperForm) => {
  const [value, setValue] = React.useState<Post | null>(null);
  const { activeItem } = useContext(ModalsContext);

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    if (edit && activeItem) {
      setValue(activeItem.post);
    }
  }, [edit, activeItem]);

  const handleFormSubmit = (value: Post) => {
    setLoading(true);
    setError(null);
    setDone(false);

    try {
      !edit && value ? createPost(value) : updatePost(value as Post);
      setLoading(false);
      setDone(true);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box>
        {" "}
        <Text textAlign="center" size="small">
          Подождите...
        </Text>
      </Box>
    );
  }

  if (done) {
    return (
      <Box>
        {" "}
        <Text textAlign="center" size="small">
          Пост создан!
        </Text>
      </Box>
    );
  }

  if (error) {
    return (
      <Box>
        {" "}
        <Text textAlign="center" size="small">
          Что-то пошло не так...
        </Text>
      </Box>
    );
  }

  return (
    <Form
      value={value}
      onChange={(nextValue) => setValue(nextValue)}
      onReset={() => setValue(null)}
      // todo: fix ts error
      onSubmit={({ value }) => handleFormSubmit(value as Post)}
    >
      <FormField name="title" htmlFor="text-input-id" label="Заголовок">
        <TextInput id="text-input-id" name="title" />
      </FormField>
      <FormField
        name="body"
        htmlFor="text-input-id"
        label="Пост"
        height={"large"}
        component={TextArea}
      ></FormField>
      <Box direction="row" gap="medium">
        <Button type="submit" primary label="Создать" />
        {!edit && <Button type="reset" label="Сбросить" />}
      </Box>
    </Form>
  );
};
