import Home from "./pages/Home";
import UserList from "./pages/UserList";
import Navbar from "./components/Navbar";
import SidebarContainer from "./components/sidebars/SidebarContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [isSidebarOpened, setIsSidebarOpened] = useState(false);

  return (
    <Router>
      <Navbar
        isSidebarOpened={isSidebarOpened}
        setIsSidebarOpened={setIsSidebarOpened}
      />
      <div className="main-container">
        <SidebarContainer isSidebarOpened={isSidebarOpened} />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
