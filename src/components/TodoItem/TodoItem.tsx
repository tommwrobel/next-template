import { Todo } from "@/models/Todo";
import { LuTrash2, LuEdit, LuCheck, LuCheckSquare } from "react-icons/lu";
import IconButton from "@/components/IconButton/IconButton";
import { styles } from "./TodoItem.css";
import { theme } from "@/theme/theme.css";

const { colors } = theme;

type TodoItemProps = {
  todo: Todo;
};

const TodoItem = ({ todo }: TodoItemProps) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{todo.title}</span>
      <div className={styles.actions}>
        <IconButton icon={<LuTrash2 />} color={"error"} variant="ghost" />
        <IconButton icon={<LuEdit />} variant="ghost" />
      </div>
    </div>
  );
};

export default TodoItem;
