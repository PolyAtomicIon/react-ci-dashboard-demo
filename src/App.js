import './App.scss';
import BuildHistory from './pages/BuildHistory.jsx'
import Settings from './pages/Settings.jsx'
import StartScreen from './pages/StartScreen.jsx'
import MainLayout from './layouts/MainLayout.jsx'

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
      <MainLayout>
        <Router>
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
        </Router>
      </MainLayout>
    </>
  );
}