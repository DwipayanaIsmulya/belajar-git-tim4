import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dwi from "./page/Dwi";
import Guntur from "./page/Guntur";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dwi />} />
        <Route path="/" element={<Guntur />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
