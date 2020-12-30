import React from "react";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Footer from "./components/Footer";
// import Content from "./components/Content";
import Dashboardv1 from './Screens/Dashboardv1';
import Dashboardv2 from './Screens/Dashboardv2';
import Dashboardv3 from './Screens/Dashboardv3';
import Widgets from './Screens/Widgets';
import{
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';


export default function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Router>
          <Route path="/dashboardv1" exact>
            <Dashboardv1 />
          </Route>
      </Router>
      <Footer />
    </div>
  );
}
