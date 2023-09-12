import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Badge from "./pages/Badge/Badge";
import Components from "./pages/Components/Components";
import AvatarDoc from "./documentation/AvatarDoc/AvatarDoc";
import Installation from "./documentation/Installation/Installation";
import AlertDoc from "./documentation/AlertDoc/AlertDoc";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/components/avatar" element={<AvatarDoc />} />
        <Route path="/components/alert" element={<AlertDoc />} />
        <Route path="/badge" element={<Badge />} />
      </Routes>
    </div>
  );
}

export default App;
