import "./Navbar.scss";
import {Link} from 'react-router-dom'
import Kalendar from "../../../Image/Kalendar.svg";
import Savat from "../../../Image/Savat.svg";
import Uy from "../../../Image/Uy.svg";
import Rectangle from "../../../Image/Rectangle.png";

function Navbar() {
  return (
    <div className="navbar-left">
      <ul>
        <Link to="/buyurtmalar">
          <li className="active">
            <img className="hey" src={Uy} alt="" /> Buyurtmalar
          </li>
        </Link>
        <Link to="/akt">
          <li>
            <img className="hey" src={Kalendar} alt="" /> AKT Sverka
          </li>
        </Link>
        <Link to="/zakaz">
          <li>
            <img className="chiziq" src={Rectangle} alt="" />
            <img className="chiziq" src={Rectangle} alt="" />
            <img className="chiziq hey" src={Rectangle} alt="" /> Zakaz Berish
          </li>
        </Link>

        <Link to="/mahsulotlar">
          <li>
            <img className="hey" src={Savat} alt="" /> Mahsulotlar
          </li>
        </Link>
      </ul>
    </div>
  );
}

export default Navbar;
