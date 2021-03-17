
import Footer from "../components/Footer";
import Header from "../components/Header";
import List from "../components/List";
import {useList} from "../services/use-list";

function Todolist() {
  const [todos, addTodo] = useList('todos', [], 2);

  const addItem = (title) => {
    addTodo({ id: 1, title, completed: false })
  }

  return (
      <section className="todoapp">
        <Header title="Todos" onAddItem={addItem}/>
        <List items={todos}  />
        <Footer />
      </section>
  );
}

export default Todolist;
