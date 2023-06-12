type TodoBase = {
  id: string;
  title: string;
  creationDate: Date;
};

export type Todo = TodoBase &
  (
    | {
        isCompleted: false;
      }
    | {
        completionDate: Date;
        isCompleted: true;
      }
  );
