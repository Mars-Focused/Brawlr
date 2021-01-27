import "./App.css";
import "./App.css";
import { Route, HashRouter, Switch } from "react-router-dom";
import Login from "./Components/Login/Login";
import Update from "./Components/UpdateUser/UpdateUser";
import BrawlrMain from "./Components/BrawlrMain/BrawlrMain";
import SPView from "./Components/SPView/SPView";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/" component={Login} />
        <Route path="/Update" component={Update} />
        <Route path="/Main" component={BrawlrMain} />
        <Route path="/SPView" component={SPView} />
      </Switch>
    </HashRouter>
  );
}

export default App;
