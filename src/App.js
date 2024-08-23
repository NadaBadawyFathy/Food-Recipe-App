
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RecipeSearch from './Components/RecipeSearch';
import MoreDetails from './Components/MoreDetails';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
          <Route path="/" element={<RecipeSearch/>} />
          <Route path="/details" element={<MoreDetails/>} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
