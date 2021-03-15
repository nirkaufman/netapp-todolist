import {useState} from 'react';
import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  const [items, setItems] = useState([]);

  const addItem = (title) => {
    const updateItems = [...items, {title}];
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
