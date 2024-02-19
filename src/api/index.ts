import { Post } from "../models";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

export const getAllPosts = async () => {
  const response = await fetch(BASE_URL);
  const data = await response.json();
  return data;
};

export const gePost = async (id: string) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (post: Post) => {
  const { title, body } = post;
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: 15,
        title,
        body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (id: number) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (post: Post) => {
  const { id, userId, title, body } = post;

  try {
    const response = await fetch(`${BASE_URL}/${post.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        userId,
        title,
        body,
      }),
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};
