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

        <Field
            name="age"
            type="number"
            component={renderField}
            label="Age"
            validate={[required]}
        />

        <Field
            name="height"
            type="number"
            component={renderField}
            label="Height"
            validate={[required]}
        />

        <Field
            name="weight"
            type="number"
            component={renderField}
            label="Weight"
            validate={[required]}
        />


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


    class PersonalInfo extends React.Component {

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

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);


