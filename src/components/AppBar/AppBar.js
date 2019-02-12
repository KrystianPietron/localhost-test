import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import { connect } from 'react-redux'

import Logged from './LoggedMenu'
import Login from './UnLoggedMenu'

Logged.muiName = 'IconMenu';

const AppBarExampleComposition = props => (
    <AppBar
        title="Title"
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        iconElementRight={props.isLogged ? <Logged /> : <Login />}
    />
)
const mapStateToProps = state => ({
    isLogged: state.appbar.logged
})

export default connect(mapStateToProps, null)(AppBarExampleComposition);