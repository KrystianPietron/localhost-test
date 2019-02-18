import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import { connect } from 'react-redux';
import {
    closeDrawerAction,
    openDrawerAction
} from '../../state/drawer';

const DrawerUndockedExample = props => (
    <div>
        <Drawer
            docked={false}
            width={200}
            open={props.isOpen}
            onRequestChange={props.closeDrawer}
        >
            <MenuItem onClick={props.closeDrawer}>Head</MenuItem>
            <MenuItem onClick={props.closeDrawer}>Update</MenuItem>
        </Drawer>
    </div>
)
const mapStateToProps = state => ({
    isOpen: state.drawer.openDrawer
})

const mapDispatchToProps = dispatch => ({
    openDrawer: () => dispatch(openDrawerAction()),
    closeDrawer: () => dispatch(closeDrawerAction())
})
export default connect(mapStateToProps, mapDispatchToProps)(DrawerUndockedExample)
