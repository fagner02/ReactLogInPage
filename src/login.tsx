import "./login.css";
import "./assets/1.png";
import "./assets/2.png";
import "./assets/arrow-forward.svg";

const Login = () => {
  function openSignUpCard() {
    const box = document.querySelector(".glassBox") as HTMLElement;
    box.style.height = "0%";
    setTimeout(() => {
      (document.querySelector(".logInCard") as HTMLElement).style.display =
        "none";
      (document.querySelector(".signUpCard") as HTMLElement).style.display =
        "flex";

      box.style.height = "100%";
    }, 500);
  }

  return (
    <div className="logInCard">
      <h1>Log In</h1>
      <input type="text" placeholder="Username" />
      <input type="password" placeholder="Password" />
      <div className="buttonBox">
        <button className="signUpButton">Sign Up</button>
        <button>
          <svg
            width="34"
            height="52"
            viewBox="0 0 34 52"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M6 6L28 26L6 46"
              stroke="black"
              stroke-width="12"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Login;
