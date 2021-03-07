import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './scss/style.scss';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)
const TheLayout = React.lazy(() => import('./containers/TheLayout'));
class App extends Component {

  render() {
    return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
            <Switch>
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
              <Redirect path="/" to="/signup"/>
            </Switch>
          </React.Suspense>
      </BrowserRouter>
    );
  }
}

export default App;
