import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
// Components
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Register from "./components/Register";

function App() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const handleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <Router>
      <div className='app'>
        <Switch>
          <Route exact path='/'>
            <Navbar toggleMenu={toggleMenu} handleMenu={handleMenu} />
            <Home />
          </Route>
          <Route path='/checkout'>
            <Navbar />
            <Checkout />
          </Route>
          <Route path='/signin'>
            <Register />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

// https://images-na.ssl-images-amazon.com/images/G/01/rainier/available_at_amazon_1200x600_Nvz5h2M.png
