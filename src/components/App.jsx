import React from "react";
import Header from "./Header.jsx";
import Login from "./Login.jsx";
import { Routes, Route, useNavigate} from "react-router-dom";
import * as auth from "../utils/auth";

function App() {
  const [userEmail, setUserEmail] = React.useState("");
  const navigate = useNavigate();

  function handleLogin(email, password) {
    auth
      .login(email, password)
      .then((data) => {
        console.log(data);
        if (data.token) {
          localStorage.setItem("jwt", data.token);
          setUserEmail(`${email}`);
          navigate("/mesto-react-auth");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <div>
      <Header email={userEmail}/>
      <div className="page">
        <Routes>
          <Route
            path="/signin"
            element={
              <Login onLogin={handleLogin} title="Вход" buttonText="Войти" />
            }
          />
        </Routes>
      </div>
    </div>
  );
}

export default App;
