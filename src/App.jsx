import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dwi from "./page/Dwi";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dwi />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
