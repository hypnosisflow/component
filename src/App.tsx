import { useEffect, useState } from "react";

import { Box, Grommet } from "grommet";
import { MySuperComponent } from "./components/super-component/my-super-component";
import { ModalStore } from "./components/modalstore";
import { Options, Post } from "./models";
import { getAllPosts } from "./api";

import "./App.css";

function App() {
  const [posts, setPosts] = useState<Post[] | null>(null);

  useEffect(() => {
    // Привет!
    //
    // Буду очень благодарен обратной связи, если укажите на точки роста. По ходу я оставил коментарии, где явно можно сделать лучше.
    // Спасибо за ревью!

    // jsonplaceholder дает данные но не меняет при взаимодейтсвия с ними (create, delete, update), только овтеты со статусом 200
    // можно улучшить = использовать localstorage для кеширования.
    getAllPosts().then((res) => setPosts(res));
  }, []);

  const options: Options = {
    view: "table",
    pagination: true,
    addFn: true,
    filters: true,
  };

  return (
    <Grommet full>
      <Box pad="medium">
        {posts && <MySuperComponent posts={posts} options={options} />}
      </Box>

      {/* modals */}
      <ModalStore />
    </Grommet>
  );
}

export default App;
