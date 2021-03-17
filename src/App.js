import TodolistPage from "./pages/todolist-page";
import SignIn from "./pages/sign-in";

import {Link, Route} from "react-router-dom";
import TasksPage from "./pages/tasks-page";
import {useSelector} from "react-redux";

function App() {
  const loading = useSelector(state => state.loading)

  return (
      <>
        {loading && <h1>Loading</h1>}
        <ul>
          <li>
            <Link to="/">login</Link>
          </li>
          <li>
            <Link to="/todos">todos</Link>
          </li>
          <li>
            <Link to="/tasks">tasks</Link>
          </li>
        </ul>



        <Route exact path="/">
          <SignIn/>
        </Route>

        <Route path="/todos">
          <TodolistPage/>
        </Route>

        <Route path="/tasks">
          <TasksPage/>
        </Route>
      </>
  )
}

export default App;
