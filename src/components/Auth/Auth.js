import React from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import TextField from 'material-ui/TextField'
import { connect } from 'react-redux'
import './Auth.css'
const style = {
    text: {
        width: "300px",
        margin: "10px 20px 0 20px"
    },
    button: {
        width: "300px",
        margin: "10px 20px 0 20px"
    },
}


const Auth = props => (
    <section
        className="Auth_section"
    >
        <h3>Zaloguj się!</h3>
        <TextField
            style={style.text}
            hintText="Email"
        />
        <TextField
            style={style.text}
            hintText="Hasło"
            type="password"
        />
        <RaisedButton
            style={style.button}
            label="Zaloguj"
        />
        <RaisedButton
            style={style.button}
            label="Zarejestruj się!"
        />
    </section>
)

const mapStateToProps = state => ({

})
const mapDispatchToProps = dispatch => ({

})

export default connect()(Auth)