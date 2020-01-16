import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import {tryExit} from "../actions/actions";


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


    let InfoForm = props => {
        const { handleSubmit, submitting } = props;
        return (

        <form onSubmit={handleSubmit}>
        <div> </div>
        <label> Age </label>
        <Field
            name="age"
            type="number"
            component={renderField}
            label={false}
        /> <br/>

            <label> Sex </label>
            <Field name="sex" component="select">
                <option></option>
                <option value="male">Male</option>
                <option value="female">Female</option>
            </Field><br/>

        <label> Height </label>
        <Field
            name="height"
            type="number"
            component={renderField}
        /><br/>

        <label> Weight </label>
        <Field
            name="weight"
            type="number"
            component={renderField}
        /><br/>

            <label> Activity </label>
            <Field name="activity" component="select">
                <option></option>
                <option value="no">Almost no</option>
                <option value="below">1-2 times a week</option>
                <option value="middle">3 times a week</option>
                <option value="upper">4-5 times a week</option>
                <option value="advance">Every day</option>
            </Field><br/>

            <label> Goal </label>
            <Field name="goal" component="select">
                <option></option>
                <option value="no">Build muscle</option>
                <option value="below">Maintain weight</option>
                <option value="middle">Lose weight</option>
            </Field><br/>

        <div>
            <Link to="/profileInfo">
        <button type="submit" disabled={submitting}>

           Save
        </button>
            </Link>
        </div>
        </form>
    )
    };


    InfoForm = reduxForm({
        form: 'info'
    })(InfoForm);


    class PersonalInfoChange extends React.Component {

        constructor(props) {
            super(props);
            this.submit = this.submit.bind(this);
            this.exit = this.exit.bind(this);

        }

        submit(values) {

        }

        exit() {
            this.props.signOut();
        }

        render(){
            return(
                <div className="personalInfo">
                    <h1> Personal Account {this.props.login} <Link to="/"><button onClick={this.exit} >Log Out</button></Link></h1>
                <InfoForm />
                </div>
        );
        }
    }


    const mapStateToProps = (state) => {
        return {
            signed: state.logic.signed,
            login: state.logic.login
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(tryExit()),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoChange);


