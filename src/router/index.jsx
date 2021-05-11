import { lazy, Suspense } from "react";
import { Spin } from "antd";
import { Switch, Route, HashRouter } from "react-router-dom";
import Layout from "../views/layout/index.jsx";
const Report = lazy(() => import("../views/report/index"));
const Dashboard = lazy(() => import("../views/dashboard/index"));
const Datasource = lazy(() => import("../views/data-source/index"));
const Task = lazy(() => import("../views/task/index"));
const Checkin = lazy(() => import("../views/task/checkin"));
const Daily = lazy(() => import("../views/daily/index"));
export default function () {
  function onEnter() {
    console.log(1111)
  }
  return (
    <HashRouter>
      <Layout>
        <Suspense
          fallback={<Spin className="width100 height100 center" size="large" />}
        >
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/report" component={Report} />
            <Route path="/datasource" component={Datasource} />
            <Route exact path="/task" component={Task} />
            <Route path="/task/checkin" component={Checkin} />
            <Route path="/daily" onEnter={onEnter} component={Daily} />
          </Switch>
        </Suspense>
      </Layout>
    </HashRouter>
  );
}
