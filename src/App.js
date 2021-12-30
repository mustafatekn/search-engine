import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import Results from "./components/Results";
import { SearchProvider } from "./context/search";
import "./App.scss";
import { UIProvider } from "./context/ui";

function App() {
  return (
    <div className="container">
      <UIProvider>
        <SearchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/results" element={<Results />} />
            </Routes>
          </BrowserRouter>
        </SearchProvider>
      </UIProvider>
    </div>
  );
}

export default App;
