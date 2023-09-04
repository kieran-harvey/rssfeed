import "./App.scss";
import { Feed, ArtDetail, TitleBar } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app" data-testid="app">
      <BrowserRouter>
        <TitleBar />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/:id" element={<ArtDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
