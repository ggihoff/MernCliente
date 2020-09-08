import React, { useEffect } from "react";
import "./App.css";
import Tweet from "./components/Tweet";
import Feed from "./components/Feed";
import Home from "./components/Home";
import Login from "./components/Login";
import { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router-dom";
import Register from "./components/Register";
import Cookies from 'js-cookie';


function App() {
  const [logged, setLogged] = useState(false);
  const cookie = Cookies.get('access-token');
console.log(cookie);  

  return (
    <Router>
      {!logged ? (
        <Route exact path="/" component={Home} />
      ) : (
        <Route exact path="/" component={Feed} />
      )}

      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
