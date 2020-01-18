import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';
import {Link} from "react-router-dom";
import {tryExit, updateInfo } from "../actions/actions";
import NavBar from "./Navbar";


let data = {age: 10, height: 10, weight: 10, sex: '', activity: null, goal: null}

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

        <label> Age </label>
        <Field
            name="age"
            type="number"
            component="input"
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
                <option value="Almost no">Almost no</option>
                <option value="1-2 times a week">1-2 times a week</option>
                <option value="3 times a week">3 times a week</option>
                <option value="4-5 times a week">4-5 times a week</option>
                <option value="Every day">Every day</option>
            </Field><br/>

            <label> Goal </label>
            <Field name="goal" component="select">
                <option></option>
                <option value="Build muscle">Build muscle</option>
                <option value="Maintain weight">Maintain weight</option>
                <option value="Lose weight">Lose weight</option>
            </Field><br/>

        <div>
        <button type="submit" disabled={submitting}>
           Save
        </button>


            <Link to="/profile">
                <button type="button" disabled={submitting}>
                    Cancel
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

        submit(value) {
            this.props.updateInfo(this.props.login, value);
            console.log(this.props.mas);
        }

        exit() {
            this.props.signOut();
            this.props.history.push('/');
        }

        render(){

            return(
                <div className="personalAccount">
                    <NavBar/>
                    <div className="name">
                        <h3> {this.props.login}  </h3>
                        <button onClick={this.exit} >Log Out</button>
                    </div>
                <div className="personalInfo">
                    <InfoForm onSubmit={this.submit}/>
                </div>
                </div>
        );
        }
    }


    const mapStateToProps = (state) => {
        return {
            signed: state.logic.signed,
            login: state.logic.login,
            info: state.logic.info,
            mas: state.form
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            signOut: () => dispatch(tryExit()),
            updateInfo: (login, data) => dispatch(updateInfo(login, data))
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoChange);


