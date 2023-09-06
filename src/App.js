import Home from "./pages/home/Home";
import AboutUs from "./pages/aboutUs/AboutUs";
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Resources from "./pages/resources/Resources";
import Members from "./pages/members/Members";
import PtaMacs from "./pages/ptamacs/PtaMacs";
import Courses from "./pages/courses/Courses";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/home">
          <Home />
        </Route>
        <Route exact path="/about">
          <AboutUs />
        </Route>
        <Route exact path="/resources">
          <Resources />
        </Route>
        <Route exact path="/members">
          <Members />
        </Route>
        <Route exact path="/ptamacs">
          <PtaMacs />
        </Route>
        <Route exact path="/courses">
          <Courses />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
