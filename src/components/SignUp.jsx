import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';
import {throwError, trySignUp} from "../actions/actions";


const required = value => (value || typeof value === 'number' ? undefined : 'Required');
const email = value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Invalid email address'
        : undefined;

const password = value =>
    value && !/(?=.*[a-zA-Z])(?=.*[0-9]){6,}/i.test(value)
        ? 'Password must have 6 or more symbols and include a number'
        : undefined;

const passwordsMatch = (value, allValues) =>
    value !== allValues.password ? 'Passwords don\'t match' : undefined;

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
                validate={[required, password]}
            />

            <Field
                name="confirmPassword"
                type="password"
                component={renderField}
                label="Confirm password"
                validate={[required, passwordsMatch]}
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

    componentDidMount() {
        this.props.cleanError('');
    }

    submit(values) {
        this.props.trySighUp(values.email, values.password);
    }

    render(){
        return(
            <div className="SignUp">
                <p>{this.props.error}</p>
                <RegisterForm onSubmit={this.submit} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        error: state.logic.error,
    };
};



const mapDispatchToProps = (dispatch) => {
    return {
        trySighUp: (login, password) => dispatch(trySignUp(login,password)),
        cleanError: (script) => dispatch(throwError(script))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
