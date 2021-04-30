import { BrowserRouter as Router, Switch, Route, HashRouter } from "react-router-dom";
import Report from "../views/report/index.jsx";
import Dashboard from "../views/dashboard/index.jsx";
import Layout from "../views/layout/index.jsx";
export default function () {
  return (
    <HashRouter>
      <Layout>
        <Switch>
          <Route exact path="/" state={{
              icon:'1111',
              name:'Dashboard'
          }} component={Dashboard} />
          <Route path="/report" state={{
              icon:'22222',
              name:'报表管理'
          }} component={Report} />
        </Switch>
      </Layout>
    </HashRouter>
  );
}
