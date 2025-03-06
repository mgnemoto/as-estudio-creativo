import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage/HomePage";
import Gallery from "./pages/galleryPage/Gallery";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route path="/as-estudio-creativo" index element={<HomePage/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
