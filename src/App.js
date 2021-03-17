import Todolist from "./pages/todolist";
import SignIn from "./pages/sign-in";

import {BrowserRouter, Link, Route} from "react-router-dom";

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
        </ul>

        <Route exact path="/">
          <SignIn/>
        </Route>

        <Route path="/todos">
          {/*todo: pass a title to todolist*/}
          <Todolist/>
        </Route>

      {/* route to '/task  */}

      </BrowserRouter>
  )
}

export default App;
