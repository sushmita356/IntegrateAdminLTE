import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
// import Content from "./components/Content";

import Dashboardv1 from "./Screens/Dashboardv1";
import Dashboardv2 from "./Screens/Dashboardv2";
import Dashboardv3 from "./Screens/Dashboardv3";
import Widgets from "./Screens/Widgets";
import TopNavigation from "./Screens/TopNavigation";
import TopNavSidebar from './Screens/TopNavSidebar';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Boxed from "./Screens/Boxed";
import FixedSidebar from "./Screens/FixedSidebar";
import FixedNavbar from "./Screens/FixedNavbar";
import FixedFooter from "./Screens/FixedFooter";
import Charts from './Screens/Charts';
import Flot from "./Screens/Flot";
import Inline from "./Screens/Inline";

export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Router>
        <Route path="/" exact>
          <Dashboardv1 />
        </Route>
        <Route path="/dashboardv1" exact>
          <Dashboardv1 />
        </Route>

        <Route path="/dashboardv2" exact>
          <Dashboardv2 />
        </Route>
        <Route path="/dashboardv3" exact>
          <Dashboardv3 />
        </Route>
        <Route path="/widgets" exact>
          <Widgets />
        </Route>
        <Route path="/TopNavigation" exact>
          <TopNavigation />
        </Route>
        <Route path="/TopNavSidebar" exact>
          <TopNavSidebar />
        </Route>
        <Route path="/boxed" exact>
          <Boxed />
        </Route>
        <Route path="/fixedSidebar" exact>
          <FixedSidebar />
        </Route>
        <Route path="/fixedNavbar" exact>
          <FixedNavbar />
        </Route>
        <Route path="/FixedFooter" exact>
          <FixedFooter />
        </Route>
        <Route path="/collapsedSidebar" exact>
          <collapsedSidebar />
        </Route>
        <Route path="/Charts" exact>
          <Charts />
        </Route>
        <Route path="/flot" exact>
          <Flot/>
        </Route>
        <Route path="/Inline" exact>
          <Inline/>
        </Route>







      </Router>
      <Footer />
    </div>
  );
}
