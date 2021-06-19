import Home from "./pages/Home";
import UserList from "./pages/UserList";
import User from "./pages/User";
import NewUser from "./pages/NewUser";
import Navbar from "./components/Navbar";
import SidebarContainer from "./components/sidebars/SidebarContainer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import ProductList from "./pages/ProductList";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="main-container">
        <SidebarContainer />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userID">
            <User />
          </Route>
          <Route path="/newUser">
            <NewUser />
          </Route>
          <Route path="/products">
            <ProductList />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
