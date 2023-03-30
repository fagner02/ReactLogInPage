import "./loginn.css";
import "./assets/1.png";
import "./assets/2.png";
import "./assets/arrow-forward.svg";
import SignUp from "./signup";
import LogIn from "./loginn";

const TabPage = () => {
  return (
    <div
      style={{
        height: "-webkit-fill-available",
        display: "flex",
        flexDirection: "column",
      }}>
      <div className="backgroundCard"></div>
      <div className="ball"></div>
      <div className="ball"></div>
      <div className="ball"></div>

      <div className="padding">
        <div className="glassBox">
          <div className="padding2">
            <LogIn></LogIn>
            <SignUp></SignUp>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TabPage;
