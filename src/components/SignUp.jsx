import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;


const renderField = ({input, label, type, meta: { touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
)


let RegisterForm = props => {
    const { handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>

            <Field
                name="email"
                type="email"
                component={renderField}
                label="Email"
                validate={email}
            />

            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required]}
            />

            <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm password"
                validate={[required]}
            />
            <div>
                <button type="submit" disabled={submitting}>
                    Sign Up
                </button>
            </div>
        </form>
    )
};


RegisterForm = reduxForm({
    form: 'register'
})(RegisterForm);


class SignUp extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    submit(values) {

    }

    render(){
        return(
            <div className="SignUp">
                <RegisterForm onSubmit={this.submit} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
