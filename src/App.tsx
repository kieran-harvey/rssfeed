import "./App.scss";
import { Feed, ArtDetail, TitleBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <TitleBar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="/:id" element={<ArtDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
