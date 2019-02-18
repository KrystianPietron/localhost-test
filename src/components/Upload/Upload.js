import React from 'react'
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import './Upload.css'

const style = {
    text: {
        width: "300px",
        margin: "10px 20px 0 20px"
    },
    button: {
        width: "140px",
        margin: "10px 20px 0 20px"
    },
}
const Upload = props => (
    <section
        className="Upload__section"
    >

        <h3>
            Wybierz plik z dysku.
        </h3>
        <TextField
            style={style.text}
        />
        <div
            className="Upload__section-div"
        >
            <RaisedButton
                style={style.button}
                label="Wybierz plik"
            />
            <RaisedButton
                style={style.button}
                label="Wyślij"
            />
        </div>
    </section>
)

export default Upload