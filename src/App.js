import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="main-container">
        <Sidebar />
        <Home />
      </div>
    </>
  );
}

export default App;
