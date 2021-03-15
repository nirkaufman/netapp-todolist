import {useState, useEffect, useRef} from 'react';
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
  const counter = useRef(0);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
        .then( (results) => results.json())
        .then( items => setItems(items))
  },[])

  useEffect(() => {
    if(items.length > 0) {
      console.log('item added')
    }
  }, [items])

  const addItem = (newText) => {
    if(counter.current > 5) {
      alert('you reached the limit')
      return
    }
    const updateItems = [...items, {title: newText}];
    counter.current += 1;
    setItems(updateItems);
  }

  const removeItem = (index) => {
    const updatedItems =  items.splice(index, 1)
        .concat( items.splice(index + 1));
    setItems(updatedItems);
  }

  return (
      <section className="todoapp">
        <h5>{counter.current}</h5>
        <Header title="Todos" onAddItem={addItem}/>
        <List items={items} onRemoveItem={removeItem} />
        <Footer />
      </section>
  );
}

export default App;
