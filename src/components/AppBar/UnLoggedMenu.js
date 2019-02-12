import React from 'react'
import FlatButton from 'material-ui/FlatButton';

import { connect } from 'react-redux'
import { LoginAction } from '../../state/appbar';

const LoggedMenu = props => (
    <FlatButton
        onClick={props.logged}
        label="Login"
    />
);

const mapDispatchToProps = dispatch => ({
    logged: () => dispatch(LoginAction()),
})
export default connect(null, mapDispatchToProps)(LoggedMenu)