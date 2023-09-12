import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import Alert from "./pages/Alert/Alert";
import Badge from "./pages/Badge/Badge";
import Components from "./pages/Components/Components";
import AvatarDoc from "./documentation/AvatarDoc/AvatarDoc";
import Installation from "./documentation/Installation/Installation";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/installation" element={<Installation />} />
        <Route path="/components/avatar" element={<AvatarDoc />} />
        <Route path="/alert" element={<Alert />} />
        <Route path="/badge" element={<Badge />} />
      </Routes>
    </div>
  );
}

export default App;
