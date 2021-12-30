import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Results from "./components/Results";
import { DataProvider } from "./context/data";
import "./App.scss";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
