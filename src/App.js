import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route } from 'react-router-dom'
import { Provider } from "react-redux"
import 'bootstrap/dist/css/bootstrap.min.css';

import store from './store'
import Homepage from './pages/Homepage'
import DetailContact from './pages/DetailContact'
// import AddContact from './components/FormContact'
import AddPages from './pages/AddPages'

import './App.css';
import './styles/DetailContact.css'

const styles = {
  bodyWrapper: {
    backgroundColor: '#2D3848',
    height: '100vh',
    width: '100%'
  },
  pageWrapper: {
    fontFamily: 'Quicksand'
  }
}
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="" style={styles.pageWrapper}>
          <div className="" style={styles.bodyWrapper}>
          
            <Switch>
              <Route exact path="/" component={Homepage}/>
              <Route path ="/contact/add" component={AddPages}/>
              <Route path ="/:id" component={DetailContact}/>
            </Switch>
          </div>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
