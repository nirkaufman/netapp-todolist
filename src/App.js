import TodolistPage from "./pages/todolist-page";
import SignIn from "./pages/sign-in";

import {BrowserRouter, Link, Route} from "react-router-dom";
import TasksPage from "./pages/tasks-page";

function App() {
  return (
      <BrowserRouter>
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

      </BrowserRouter>
  )
}

export default App;
