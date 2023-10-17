import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./page/Home";
import Dwi from "./page/Dwi";
<<<<<<< HEAD
=======
import Guntur from "./page/Guntur";
>>>>>>> f903589390ae3c02ab8da08a2135066fd77b4e21
import Arin from "./page/Arin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<Dwi />} />
<<<<<<< HEAD
=======
        <Route path="/gun" element={<Guntur />} />
>>>>>>> f903589390ae3c02ab8da08a2135066fd77b4e21
        <Route path="/arin" element={<Arin />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
