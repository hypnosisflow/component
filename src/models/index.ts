export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface Item {
  post: Post;
}

export interface View {
  currentData: Post[];
}

export interface Options {
  view: string;
  pagination: boolean;
  addFn: boolean;
  filters: boolean;
}

export interface MySuperComponentProps {
  posts: Post[];
  options: Options;
}

export interface SuperModalProps {
  setter: (() => void) | ((item?: Item) => void);
  children: React.ReactNode;
}

export interface FiltersProps {
  dataArray: Array<Post>;
  setCurrentData: (arr: Array<Post>) => void;
}

export interface SuperPaginationProps {
  dataArray: Array<Post>;
  setCurrentData: (arr: Array<Post>) => void;
}
