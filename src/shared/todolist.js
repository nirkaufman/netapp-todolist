import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Todolist({title, todos, addTodo}) {

  const addItem = (title) => {
    addTodo({ id: 1, title, completed: false })
  }

  return (
      <section className="todoapp">
        <Header title={title} onAddItem={addItem}/>
        <List items={todos}  />
        <Footer />
      </section>
  )
}

export default Todolist;
