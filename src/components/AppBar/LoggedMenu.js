import React from 'react'
import { connect } from 'react-redux';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import { UnLoggedAction } from '../../state/appbar';

const LoggedMenu = (props) => (
    <IconMenu
        {...props}
        iconButtonElement={
            <IconButton>
                <MoreVertIcon />
            </IconButton>
        }
        targetOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    >
        <MenuItem
            primaryText="Refresh"
        />
        <MenuItem
            primaryText="Help"
        />
        <MenuItem
            primaryText="Sign out"
            onClick={props.unLogged}
        />
    </IconMenu>
);

const mapDispatchToProps = dispatch => ({
    unLogged: () => dispatch(UnLoggedAction()),
})
export default connect(null, mapDispatchToProps)(LoggedMenu)