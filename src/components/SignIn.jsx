import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';
import {sendInfo, throwError, trySignIn} from "../actions/actions";


const required = value => (value || typeof value === 'number' ? undefined : 'Required');

const renderField = ({input, label, type, meta: { touched, error}}) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched && (error && <span>{error}</span>)}
        </div>
    </div>
)


let LogInForm = props => {
    const { handleSubmit, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="login"
                type="text"
                component={renderField}
                label="Login"
                validate={[required]}
            />

            <Field
                name="password"
                type="password"
                component={renderField}
                label="Password"
                validate={[required]}
            />

            <div>
                <button type="submit" disabled={submitting}>
                    Sign In
                </button>
            </div>
        </form>
    )
};


LogInForm = reduxForm({
    form: 'login'
})(LogInForm);


class SignIn extends React.Component {

    constructor(props) {
        super(props);
        this.submit = this.submit.bind(this);
    }

    componentDidMount() {
        this.props.cleanError('');
    }

    submit(values) {
       this.props.signIn(values.login, values.password);
    }

    render(){
        return(
            <div className="SignIn">
                <p>{this.props.error}</p>
                <LogInForm onSubmit={this.submit} />
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    return {
        signed: state.logic.signed,
        error: state.logic.error,
        login: state.logic.login,
        info: state.logic.info
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signIn: (login, password) => dispatch(trySignIn(login,password)),
        cleanError: (script) => dispatch(throwError(script))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);


/*Не учитывать регистр*/