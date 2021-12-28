import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './components/Landing';
import Results from './components/Results';
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing/>} />
        <Route path="/results" element={<Results/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
