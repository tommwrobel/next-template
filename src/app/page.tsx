import styles from "./page.module.css";
import TodoList from "@/containers/TodoList/TodoList";
import { Todo } from "@/models/Todo";

const todosMock: Todo[] = [
  {
    id: "1",
    title: "Zrobić zakupy w sklepie",
    creationDate: new Date(),
    isCompleted: false,
  },
  {
    id: "2",
    title: "Zjesć śniadanie",
    creationDate: new Date(),
    isCompleted: true,
    completionDate: new Date(),
  },
  {
    id: "3",
    title: "Kupić chleb w sklepie",
    creationDate: new Date(),
    isCompleted: false,
  },
  {
    id: "4",
    title: "Wykonać ćwiczenia",
    creationDate: new Date(),
    isCompleted: false,
  },
];

const Home = () => {
  return (
    <main className={styles.main}>
      <TodoList date={new Date()} todos={todosMock} />
    </main>
  );
};

export default Home;
