import React from 'react'
import TextField from 'material-ui/TextField'
import RaisedButton from 'material-ui/RaisedButton'
import './Register.css'

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

const Register = props => (
    <section
        className="Register__section"
    >
        <h3>Rejestracja</h3>
        <TextField
            style={style.text}
            hintText="Email"
        />
        <TextField
            style={style.text}
            hintText="Hasło"
        />
        <TextField
            style={style.text}
            hintText="Powtórz Hasło"
        />
        <RaisedButton
            style={style.button}
            label="Zarejestruj"
        />
    </section>
)

export default Register