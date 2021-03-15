import {useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

/**
 *  Item {
 *    id: number,
 *    title: string,
 *    completed: boolean
 *  }
 */

function App() {
  const [items, setItems] = useState([]);

  const addItem = (newText) => {
    const updateItems = [...items, {title: newText}];
    setItems(updateItems);
  }

  return (
      <section className="todoapp">
        <Header title="Todos" onAddItem={addItem}/>
        <List items={items} />
        <Footer />
      </section>
  );
}

export default App;
