
import React from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import PrivateRoute from './PrivateRoute';
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import FlowerBoard from "./pages/FlowerBoard";
import { AuthContext } from "./context/auth";
import Login from "./pages/Login";
import Signup from './pages/Signup';

function App(props) {
  return (
    <AuthContext.Provider value={false}>
      <Router>
        <div>
          <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/admin">Admin Page</Link>
          </li>
          <li>
            <Link to="/flowerboard">Flower Menu</Link>
          </li>
          </ul>
          <Route exact path="/" component={Home} />
          <Route path="/flowerboard" component={FlowerBoard} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
          <PrivateRoute path="/admin" component={Admin} />
        </div>
      </Router>
    </AuthContext.Provider>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Link, Route } from "react-router-dom";
// import Home from './pages/Home';
// import Admin from './pages/Admin';
// import FlowerBoard from "./pages/FlowerBoard";

// function App(props) {
//   return (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home Page</Link>
//           </li>
//           <li>
//             <Link to="/admin">Admin Page</Link>
//           </li>
//           <li>
//             <Link to="/flowerboard">Flower Menu</Link>
//           </li>
//         </ul>
//         <Route exact path="/" component={Home} />
//         <Route path="/admin" component={Admin} />
//         <Route path="/flowerboard" component={FlowerBoard} />
//       </div>
//     </Router>
//   );
// }

// export default App;