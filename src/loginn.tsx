import "./loginn.css";
import "./assets/1.png";
import "./assets/2.png";
import "./assets/arrow-forward.svg";

const LogIn = () => {
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
      <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <div>
          <h1>Log In</h1>
          <p>
            not registered yet? <b onClick={() => openSignUpCard()}>sign up</b>
          </p>
        </div>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
      </div>
      <button style={{ placeSelf: "flex-end" }}>
        <svg
          width="20"
          height="20"
          viewBox="0 0 34 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 6L28 26L6 46"
            stroke="white"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default LogIn;
