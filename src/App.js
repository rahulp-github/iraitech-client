import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import Login from "./components/Login";
import { useState,useEffect } from "react";
import { isExpired, decodeToken } from "react-jwt";
import { useHistory } from "react-router-dom";
import Profile from "./components/Profile";
import Protected from "./components/Protected";

function App() {

  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [userName,setUsername] = useState('');
  const history = useHistory();

  // Check If Token is valid
  // If Token Valid -> isAuthenticated -> true

  useEffect(() => {
    const token = localStorage.getItem("token");
    const myDecodedToken = decodeToken(token);
    if(myDecodedToken !== null){
      setIsAuthenticated(true);
      setUsername(myDecodedToken.first_name);
      history.push('/');
    }
    else{
       localStorage.removeItem("token");
    }
  }, []);


  return (
    <div className="App">
       <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout}/>
       <Switch>
          <Route exact path="/" render={(props) => <Home isAuthenticated={isAuthenticated} handleLogout={handleLogout} username={userName} {...props} />}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/login"  render={(props) => <Login handleAuthentication={handleAuthentication} {...props} />}></Route>
          <Protected path="/profile" isAuthenticated={isAuthenticated} component={Profile}></Protected>
       </Switch>
    </div>
  );

  function handleAuthentication(token){
     const decoded = decodeToken(token);
    setUsername(decoded.first_name);
    setIsAuthenticated(true);
  }

  function handleLogout(){
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  }

}

export default App;
