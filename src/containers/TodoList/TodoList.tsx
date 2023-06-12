"use client";
import { Todo } from "@/models/Todo";
import PaperCard from "@/components/PaperCard/PaperCard";
import DateBar from "@/components/DateBar/DateBar";
import TodoItem from "@/components/TodoItem/TodoItem";
import { styles } from "./TodoList.css";

type TodoListProps = {
  date: Date | string;
  todos?: Todo[];
};

const TodoList = ({ todos, date }: TodoListProps) => {
  return (
    <PaperCard className={styles.wrapper} size="big">
      <DateBar date={date} />
      <div className={styles.todosWrapper}>
        {todos?.map((todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </div>
    </PaperCard>
  );
};

export default TodoList;
