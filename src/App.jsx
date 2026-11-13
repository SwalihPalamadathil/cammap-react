/*import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

function App() {>
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App; */


import Maintenance from "./Maintenance.jsx";

function App() {
  return <Maintenance />;
}

export default App;
