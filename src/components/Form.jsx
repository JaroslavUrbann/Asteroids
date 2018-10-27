import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { withRouter } from "react-router-dom";

const Form = ({ history }) => {
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                history.push("/Search/" + document.getElementById("date1").value + "/" + document.getElementById("date2").value);
            }}
        >
            <label>From: </label>
            <div>
                <Field id="date1"
                    name="date1"
                    component="input"
                    type="date"
                    placeholder="From" />
            </div>
            <label>To: </label>
            <div>
                <Field id="date2"
                    name="date2"
                    component="input"
                    type="date"
                    placeholder="To" />
            </div>
            <button type="submit">
                Search
        </button>
        </form>
    );
};

export default reduxForm({
    form: 'simple'
})(withRouter(Form));
