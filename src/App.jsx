import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dwi from "./page/Dwi";
import Guntur from "./page/Guntur";
import Arin from "./page/Arin";
import GunturDua from "./page/GunturDua";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dwi />} />
        <Route path="/gun" element={<Guntur />} />
        <Route path="/arin" element={<Arin />}></Route>
        <Route path="/gundua" element={<GunturDua/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
