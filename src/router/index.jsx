import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Report from "../views/report/index.jsx";
import Dashboard from "../views/dashboard/index.jsx";
export default function () {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Dashboard} />
        <Route path="/report" component={Report} />
      </Switch>
    </Router>
  );
}