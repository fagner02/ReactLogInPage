import "./signup.css";

const SignUp = () => {
  function openLogInCard() {
    const box = document.querySelector(".glassBox") as HTMLElement;
    box.style.height = "0%";
    setTimeout(() => {
      (document.querySelector(".logInCard") as HTMLElement).style.display =
        "flex";
      (document.querySelector(".signUpCard") as HTMLElement).style.display =
        "none";

      box.style.height = "100%";
    }, 500);
  }

  return (
    <div className="signUpCard">
      <div className="title">
        <h1>Sign Up</h1>
        <p>
          already registered? <b onClick={() => openLogInCard()}>log in</b>
        </p>
      </div>
      <input type="text" placeholder="Username" />
      <input type="text" placeholder="Email" />
      <input type="password" placeholder="Password" />
    </div>
  );
};

export default SignUp;
