import Header from "./Header";
import List from "./List";
import Footer from "./Footer";

function Todolist({title}) {
  return (
      <section className="todoapp">
        <Header title={title} />
        <List/>
        <Footer />
      </section>
  )
}

export default Todolist;
