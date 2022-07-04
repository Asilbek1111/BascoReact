import "../Header/Header.scss";
import { Link } from "react-router-dom";
import bascoLogo from "../../Svgs/555.png";
import sunLogo from "../../Image/111.svg";
import round from "../../Svgs/Ellipse2.png";
import littleRound from '../../Svgs/Ellipse3.png';
import diamond from '../../Svgs/diamond.png';
import play from "../../Svgs/21.png";
import star from "../../Svgs/star1.png";


function Header() {
  return (
    <div className="header">
      <div className="nav">
        <img className="bascologo" src={bascoLogo} alt="basco" />
        <p className="paragraf">+998912226434</p>
        <Link to="/login">
          <button className="video">Login/Sign Up</button>
        </Link>
      </div>

      <div className="header__wrapper">
        <div className="first-part">
          <h1>
            Diqqatingizni biznesingizdagi eng muhim ishlarga qarating. Qolgan
            ishlarni avtomatlashtiring
          </h1>
          <p className="parag">
            Barcha biznes jarayonlarini yagona platforma orqali nazorat qiling.
            Basco ERP platformasi bilan samaradorligingiz oshib, xarajatlaringiz
            kamayadi.
          </p>
          <div className="btns">
            <button className="video">Demo videoni ko'rish</button>
            <p>Telefonda suhbat belgilash</p>
          </div>
        </div>
        <div className="second-part">
          <img className="play" src={play} alt="" />
          <img src={sunLogo} alt="sun" />
          <div className="rahbar">
            <div className="stardiv">
              <img className="star" src={star} alt="" />
            </div>
            <div className="left">Rahbar Bo'limi</div>
          </div>
        </div>
      </div>
      <img src={round} alt="" />
      <div className="diamond-round">
        <img className="liitle-ellipse" src={littleRound} alt="" />
        <img className="diamond" src={diamond} alt="" />
      </div>
    </div>
  );
}

export default Header;
