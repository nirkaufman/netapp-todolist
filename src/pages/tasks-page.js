
import Footer from "../shared/Footer";
import Header from "../shared/Header";
import List from "../shared/List";
import {useList} from "../hooks/use-list";
import Todolist from "../shared/todolist";

function TasksPage() {
  const [todos, addTodo] = useList('todos', [], 2);

  return (
      <Todolist title={'tasks'} addTodo={addTodo} todos={todos}/>
  );
}

export default TasksPage;
