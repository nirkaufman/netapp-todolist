import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  console.log('App function executed');

  const items = [
    { id: 1, title: 'Learn JS', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Redux', completed: false },
  ];


  function addItem(title) {
    items.push({ id: Date.now(), title, completed: false });
  }

  return (
      <section className="todoapp">
        <Header title="Todos" onAddItem={addItem} />
        <List items={items} />
        <Footer />
      </section>
  );
}

export default App;
