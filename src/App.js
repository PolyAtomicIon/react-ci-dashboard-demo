import './App.scss';
import BuildHistory from './pages/BuildHistory'
import Settings from './pages/Settings'
import StartScreen from './pages/StartScreen'
import Footer from './сomponents/Footer'

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

let isSetUp = localStorage.getItem('isSetUp')
// let isSetUp = true

export default function App() {
  return (
    <>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/settings">
              <Settings />
            </Route>
            <Route path="/">
              { isSetUp ? <BuildHistory/> : <StartScreen/>}
            </Route>
          </Switch>
        </div>
      </Router>
      <Footer/>
    </>
  );
}