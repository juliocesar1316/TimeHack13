import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Avaliacao from "./pages/avaliacao";
import Login from "./pages/login";
import Sobre from "./pages/sobre";
import Buscar from "./pages/buscar";
import RotasProtegidas from "./components/RotasProtegidas";

function App() {
  return (
    <div className="App">
      <div>
        
          <Router>
              <Routes>
                <Route exact path="/" element={<Login />} />
                <Route path="/" exact element={<RotasProtegidas />}> 
                  <Route path="/home" element={<Home />} />
                  <Route path="/avaliacao" element={<Avaliacao />}/>  
                  <Route path="/sobre" element={<Sobre />} /> 
                  <Route path="/buscar" element={<Buscar />} />
                </Route>                  
              </Routes>
          </Router>
      </div>
    </div>
  );
}

export default App;
