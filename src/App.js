import {useState, useEffect, useRef} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";
import {useList} from "./services/use-list";


/**
 *  Item {
 *    id: number,
 *    title: string,
 *    completed: boolean
 *  }
 */
function App() {
  const [todos, addTodo] = useList('todos', [], 2);
  const [users, addUser] = useList('users', [], 3);

  const addItem = (title) => {
    addTodo({ id: 1, title, completed: false })
  }

  return (
      <section className="todoapp">
        <Header title="Todos" onAddItem={addItem}/>
        <List items={todos}  />
         {/*<Usders users={} />*/}
        <Footer />
      </section>
  );
}

export default App;
