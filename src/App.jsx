import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dwi from "./page/Dwi";
import Arin from "./page/Arin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dwi />} />
        <Route path="/arin" element={<Arin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
