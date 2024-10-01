export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

export type TodoStore = {
  todos: Todo[];
  selectedTodo: Todo | null;
  isLoading: boolean;
};
