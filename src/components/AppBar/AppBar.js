import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import Navigation from 'material-ui/svg-icons/action/reorder';
import { connect } from 'react-redux'

import Logged from './LoggedMenu'
import Login from './UnLoggedMenu'
import { openDrawerAction } from '../../state/drawer';
import Drawer from '../Drawer'

Logged.muiName = 'IconMenu';

const AppBarExampleComposition = props => (
    <section>
        <AppBar
            title={props.userApp}
            iconElementLeft={props.isLogged ?
                <IconButton onClick={props.openDrawer}>
                    <Navigation />
                </IconButton>
                :
                <div>
                    Test To LocalHost
            </div>
            }
            iconElementRight={props.isLogged ?
                <Logged />
                :
                <Login />
            }
        />
        <Drawer />
    </section>
)
const mapStateToProps = state => ({
    isLogged: state.appbar.logged,
    userApp: state.appbar.userApp
})

const mapDispatchToProps = dispatch => ({
    openDrawer: () => dispatch(openDrawerAction())
})

export default connect(mapStateToProps, mapDispatchToProps)(AppBarExampleComposition);