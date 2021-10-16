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
import Footer from './сomponents/Footer';

// let isSetUp = localStorage.getItem('isSetUp')
let isSetUp = false

const footerLinks = [
  {
    title: 'Support',
    link: ''
  },
  {
    title: 'Learning',
    link: ''
  },
  {
    title: 'Русская версия',
    link: ''
  },
]

const copyright = '@2020 Your Name'

export default function App() {
  return (
    <>
      <MainLayout
        footer={
          <Footer
            footerLinks={footerLinks}
            copyright={copyright}
          />
        }
      >
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