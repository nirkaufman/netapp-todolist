import Footer from "./components/Footer";
import Header from "./components/Header";
import List from "./components/List";

function App() {
  // 1. pass the items array to List component (function)
  // and let List component loop over the items and display them
  const items = [
    { id: 1, title: 'Learn JS', completed: true },
    { id: 2, title: 'Learn React', completed: false },
    { id: 3, title: 'Learn Redux', completed: false },
  ];

  // 2. pass the addItem function to the header
  // so you can call it whenever the user enter a value
  // and press Enter
  const addItem = (title) => {
    items.push({ id: Date.now(), title, completed: false });
  }

  return (
      <section className="todoapp">
        <Header title="Todos"/>
        <List />
        <Footer />
      </section>
  );
}

export default App;
