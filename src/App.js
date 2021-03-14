import Footer from "./components/Footer";

function App() {
  return (
      <section className="todoapp">

        <header className="header">
          <h1>todos</h1>
          <input className="new-todo"
                 placeholder="What needs to be done?"
                 autoFocus />
        </header>

        <section className="main">
          <input className="toggle-all"
                 type="checkbox" />
            <ul className="todo-list">
              <li>
                <div className="view">
                  <input className="toggle"
                         type="checkbox" />
                    <label>Todo Title</label>
                    <button className="destroy" />
                </div>
                <input className="edit" />
              </li>
            </ul>
        </section>

        <Footer />

      </section>
  );
}

export default App;
