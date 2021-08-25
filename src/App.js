import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import Navbar from "./Components/Navbar";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <ToastContainer
          style={{
            width: "400px",
            textAlign: "center",
            fontSize: "1.3em",
          }}
        />
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home />} />
          <Route
            exact
            path="/privacypolicy"
            render={(routeProps) => <Privacy />}
          />
          <Route exact path="/about" render={(routeProps) => <About />} />
        </Switch>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
