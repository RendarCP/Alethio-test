import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

// page & component
import Header from './components/Header/Header'
import Service from './pages/Service/Service'
import SignUp from './pages/SignUp/SignUp'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 414 })
  return (
    <div style={{ width: '100%'}}>
      <Router>
        <Header mobile={isDesktopOrLaptop}/>
        <Switch>
          <Route exact path="/" component={Service} />
          <Route path="/sign-up" component={SignUp}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
