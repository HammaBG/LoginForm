import React, { useEffect, useState } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";

function App() {
  

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const user =localStorage.getItem("login");
  
  useEffect(()=>{
    if (user=="abc"){
    setIsLoggedIn(true);
  }
  },[])
  const loginHandler = (email, password) => {
    setIsLoggedIn(true);
    localStorage.setItem("login","abc");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("login") 
  };

  return (
    <React.Fragment>
      <MainHeader isAuthenticated={isLoggedIn} onLogout={logoutHandler} />
      <main>

        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}

      </main>
    </React.Fragment>
  );
}

export default App;
