import React, { Component } from 'react';
import AppBar from './components/AppBar';
import Auth from './components/Auth';

import { connect } from 'react-redux'
import Header from './components/Heder'
import Register from './components/Register';

const App = (props) => (
  <div>
    <AppBar />
    {
      props.isLogged ?
        <Header />
        :
        <Auth />
    }
  </div>
)
const mapStateToProps = state => ({
  isLogged: state.appbar.logged
})

export default connect(mapStateToProps, null)(App);
