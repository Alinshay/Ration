import React from "react";
import {connect} from "react-redux";
import { Field, reduxForm} from 'redux-form';



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
        />

            <label>Sex</label>
            <Field
                name="sex"
                type="radio"
                component={renderField}
                label="Male"
                value="male"
            />
            <Field
                name="sex"
                type="radio"
                component={renderField}
                value="female"
                label="Female"
            />

        <label> Height </label>
        <Field
            name="height"
            type="number"
            component={renderField}
        />

        <label> Weight </label>
        <Field
            name="weight"
            type="number"
            component={renderField}
        />

            <label> Activity </label>
            <Field name="activity" type="radio" component={renderField} label="Almost no" value="no" />
            <Field name="activity" type="radio" component={renderField} label="1-2 times a week" value="below" />
            <Field name="activity" type="radio" component={renderField} label="3 times a week" value="middle" />
            <Field name="activity" type="radio" component={renderField} label="4-5 times a week" value="upper" />
            <Field name="activity" type="radio" component={renderField} label="Every day" value="advance" />

            <label> Goal </label>
            <Field name="goal" type="radio" component={renderField} label="Build muscle" value="muscle"/>
            <Field name="goal" type="radio" component={renderField} label="Maintain weight" value="maintain"/>
            <Field name="goal" type="radio" component={renderField} label="Lose weight" value="lose"/>

                <div>
        <button type="submit" disabled={submitting}>
           Save
        </button>
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
        }

        submit(values) {

        }

        render(){
            return(
                <div className="personalInfo">
                <InfoForm />
                </div>
        );
        }
    }


    const mapStateToProps = (state) => {
        return {
            signed: state.logic.signed,
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoChange);


