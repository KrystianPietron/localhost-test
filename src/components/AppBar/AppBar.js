import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Navigation from 'material-ui/svg-icons/action/reorder';
import { connect } from 'react-redux'

import Logged from './LoggedMenu'
import Login from './UnLoggedMenu'

Logged.muiName = 'IconMenu';

const AppBarExampleComposition = props => (
    <AppBar
        title={props.userApp}
        iconElementLeft={props.isLogged ? <IconButton><Navigation /></IconButton>: <div>Siemka</div>}
        iconElementRight={props.isLogged ? <Logged /> : <Login />}
    />
)
const mapStateToProps = state => ({
    isLogged: state.appbar.logged,
    userApp: state.appbar.userApp
})

export default connect(mapStateToProps, null)(AppBarExampleComposition);