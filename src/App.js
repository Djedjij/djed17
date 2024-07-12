import "./App.css";
import FormConstructor from "./components/FormConstructor";
import Button from "./components/Button";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<Button />} />
          <Route path="/form" element={<FormConstructor />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
