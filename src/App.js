import React, {useEffect} from 'react';
import './App.css';
import Tweet from './components/Tweet';
import Feed from './components/Feed';
import Home from './components/Home'
import Login from './components/Login'
import { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import { Route} from 'react-router-dom'
import Register from './components/Register'

function App() {

  const [logged, setLogged] = useState(false);
 

  return (
<Router>
<Route exact path="/" component={Home} />
<Route exact path="/register" component={Register} />
<Route exact path="/login" component={Login} />
     
{ 

logged ?  
      <div className="App">
        <div className="__feed">
        <Tweet />
        <Feed />
        </div>
      </div> : null
}


      </Router>

  );
}

export default App;
