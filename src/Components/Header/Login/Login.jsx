import "./Login.scss";
import bascoLogo from "../../../Svgs/555.png";
import { Link } from "react-router-dom";
import { useState } from "react";


function Login() {
  const [log, setLog] = useState("Sign up");

  const [fName, setFname] = useState("");

  function handleLog(e) {
    if (e.target.textContent === "Sign up") {
      setLog("Log in");
    } else {
      setLog("Sign up");
    }
  }
  function handleName(e) {
    setFname(e.target.value);
  }
  console.log(fName);

  return (
    <>
      

      <body style={{ backgroundColor: " #191a1e" }}>
        <div className="container">
          <div className="nav">
            <img src={bascoLogo} alt="" />
            <button onClick={handleLog} className="btn">
              {log}
            </button>
          </div>
          <div className="card">
            <input onChange={handleName} type="text" placeholder="Name..." />
            <input type="email" placeholder="Email..." />
            <input type="password" placeholder="Password..." />
            <Link to="/basco">
              <button className="submit" type="submit">
                {log === "Sign up" ? "Log in" : "Sign up"}
              </button>
            </Link>
          </div>
        </div>
      </body>
    </>
  );
}

export default Login;
