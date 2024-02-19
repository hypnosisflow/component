import React, { useContext, useState } from "react";
import { Box, Button, Text } from "grommet";
import { ModalsContext } from "../../ModalContext";
import { deletePost } from "../../api";

export const DeleteModal = () => {
  const { activeItem } = useContext(ModalsContext);

  // вынести в отдельный хук чтобы не плодить копипасты. зависит какие технологии уже есть на проекте.

  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<unknown>(null);

  if (!activeItem || error)
    return (
      <Box>
        {" "}
        <Text textAlign="center" size="small">
          Что-то пошло не так...
        </Text>
      </Box>
    );

  const handleDelete = async (id: number) => {
    setLoading(true);
    setError(null);
    setDone(false);

    try {
      deletePost(id);
      setLoading(false);
      setDone(true);
    } catch (error) {
      setError(error);
      setLoading(false);
      alert("Something went wrong");
      console.log(error);
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
          Пост удален!
        </Text>
      </Box>
    );
  }

  return (
    <Box pad={""} gap="small">
      <Box gap="small">
        <Text textAlign="center" weight={"bold"} margin={"small"}>
          {" "}
          Удалить пост?
        </Text>
        <Text textAlign="center" size="small">
          Post ID: <strong>{activeItem?.post.id}</strong>
        </Text>
        <Text textAlign="center" size="small">
          Post Title: <strong>{activeItem?.post.title} </strong>
        </Text>
        <Text textAlign="center" size="small">
          Post Title: <strong>{activeItem?.post.body} </strong>
        </Text>
      </Box>
      <Button
        type="button"
        primary
        label="Удалить"
        onClick={() => handleDelete(activeItem.post.id)}
      />
    </Box>
  );
};
