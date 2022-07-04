import "./PHeader.scss";
import Vector from "../../../Image/Vector.png";
import Search from "../../../Image/Search.png";
import Profile from "../../../Image/Profile.svg";
function PHeader() {
  return (
    <nav>
      <div className="first">
        <img src={Vector} alt="" />
        <div className="box">
          <input type="text" placeholder="Search" />
          <img className="search" src={Search} alt="" />
        </div>
      </div>
      <div className="second">
        <div className="circle">
          <img src={Profile} alt="" />
        </div>
        <h2>John Doe</h2>
      </div>
    </nav>
  );
}

export default PHeader;
