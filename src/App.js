import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Documentation from "./pages/Documentation/Documentation";
import Alert from "./pages/Alert/Alert";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/documentation/installation" element={<Documentation />} />
        <Route path="/alert" element={<Alert />} />
      </Routes>
    </div>
  );
}

export default App;
