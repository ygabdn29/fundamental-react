import "./App.css";
import RegisterForm from "./components/RegisterForm/Index";
import VerifyEmail from "./components/VerifyEmail/Index";

function App() {
  const pathName = window.location.pathname;

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      {pathName.includes("/verify/") && <VerifyEmail></VerifyEmail>}
      {pathName === "/register" && <RegisterForm></RegisterForm>}
    </div>
  );
}

export default App;
