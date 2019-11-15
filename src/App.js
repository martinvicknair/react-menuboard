import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import Home from "./pages/Home";
import FlowerBoard from "./pages/FlowerBoard";

const App = () => (
  <Router>
    <div>


        <Route exact path="/" component={Home} />
        <Route exact path="/flowerboard" component={FlowerBoard} />

    </div>
  </Router>
);

export default App;