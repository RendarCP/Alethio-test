import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'

// page & component
import Header from './components/Header/Header'
import Service from './pages/Service/Service'
import SignUp from './pages/SignUp/SignUp'
import Login from './pages/Login/Login'
import Orders from './pages/Orders/Orders'
import Order from './pages/Order/Order'

function App() {
  const isDesktopOrLaptop = useMediaQuery({ minDeviceWidth: 414 })
  return (
    <div style={{ width: '100%'}}>
      <Router>
        <Header mobile={isDesktopOrLaptop}/>
        <Switch>
          <Route exact path="/" component={Service} />
          <Route path="/sign-up" component={SignUp}/>
          <Route path="/login" component={Login}/>
          <Route exact={true} path="/mypage/order" component={Orders}/>
          <Route exact={true} path="/mypage/order/:id" component={Order}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
