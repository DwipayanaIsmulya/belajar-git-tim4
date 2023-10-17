import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Arin from "./page/Arin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/arin" element={<Arin />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
