import React, { Component } from 'react'
import Home from './views/Home'
import Detail from './views/Detail'
import Signin from './views/Signin'
import Signup from './views/Signup'
import pageNotFound from './views/pageNotFound'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {ThemeProvider} from '@material-ui/core'
import theme from './Theme'
import {connect} from 'react-redux'
import { fetchMe } from './store/actions/auth'
import { AuthRoute, PrivateRoute } from './HOC/Route'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Switch>
              <Route exact path="/" component={Home}></Route>
              {/* <PrivateRoute path="/" exact Component={Home} redirectPath="/signin"/> */}
              {/* <Route path="/detail/:id" component={Detail} /> */}
              <PrivateRoute 
                  path="/detail/:id" 
                  Component={Detail} 
                  redirectPath="/signin" />
              {/* <Route path="/signin" 
                  render={() => {
                    if(localStorage.getItem('a')){
                      return <Redirect to="/" />
                    } 
                    return <Signin />
                    }}>
              </Route> */}
              <AuthRoute path="/signin" Component={Signin} redirectPath="/" />
              <Route path="/signup" component={Signup}></Route>
              <Route path="*" component={pageNotFound}></Route>
          </Switch>
        </ThemeProvider>
      </BrowserRouter>
    )
  }

  componentDidMount(){
    const token = localStorage.getItem('a')
    if(token) this.props.dispatch(fetchMe)
  }
}


export default connect()(App);
