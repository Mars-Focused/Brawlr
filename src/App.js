import Login from "./Components/Login/Login";
import Update from "./Components/UpdateUser/UpdateUser";
import BrawlrMain from "./Components/BrawlrMain/BrawlrMain";
import SPView from "./Components/SPView/SPView";
import { Route, HashRouter, Switch, BrowserRouter } from "react-router-dom";
const Router =
  process.env.NODE_ENV === "development" ? HashRouter : BrowserRouter;

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Update" component={Update} />
        <Route path="/Main" component={BrawlrMain} />
        <Route path="/SPView" component={SPView} />
      </Switch>
    </Router>
  );
}

export default App;
