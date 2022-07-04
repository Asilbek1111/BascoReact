import "./App.scss";
import{Routes, Route} from 'react-router-dom';
import Login from './Components/Header/Login/Login'
import Home from './Pages/Home'
import Basco from "./Pages/Basco";
import Buyurtmalar from "./Pages/Buyurtmalar";
import Mahsulotlar from "./Pages/Mahsulotlar";
import Zakaz from "./Pages/Zakaz";
import Akt from "./Pages/Akt";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/basco" element={<Basco />} />
        <Route path="/akt" element={<Akt />} />
        <Route path="/mahsulotlar" element={<Mahsulotlar />} />
        <Route path="/buyurtmalar" element={<Buyurtmalar />} />
        <Route path="/zakaz" element={<Zakaz />} />
      </Routes>
    </div>
  );
}

export default App;
