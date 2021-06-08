import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <>
      <Navbar />
      <div className="home-container">
        <Sidebar />
        <div className="others">other</div>
      </div>
    </>
  );
}

export default App;
