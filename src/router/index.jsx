import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Report from "../views/report/index.jsx";
import Dashboard from "../views/dashboard/index.jsx";
export default function () {
  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path="/report" component={Report} />
      </Switch>
    </HashRouter>
  );
}
