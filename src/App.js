import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cloths from "./components/Cloths";
import Footer from "./components/Footer";
import Furniture from "./components/Furniture";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Shop from "./components/Shop";
import Health from "./components/Health";
import Electronics from "./components/Electronics";
import Beauty from "./components/Beauty";

function App() {
  document.title="Amazon"
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Hero />
            <Shop />
          </Route>
          <Route exact path="/clothes">
            <Cloths title="Amazon-Cloths"/>
          </Route>
          <Route exact path="/furniture">
            <Furniture title="Amazon-Furniture"/>
          </Route>
          <Route exact path="/health">
            <Health title="Amazon-Health"/>
          </Route>
          <Route exact path="/electronics">
            <Electronics title="Amazon-Electronics"/>
          </Route>
          <Route exact path="/beauty">
            <Beauty title="Amazon-Beauty"/>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
