import React from "react";
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/actions";
import { Link } from 'react-router-dom';





    class PersonalInfo extends React.Component {

        constructor(props) {
            super(props);
            this.submit = this.submit.bind(this);
        }

        componentDidMount() {
            this.props.fetchData(this.props.login);
        }

        submit(values) {

        }

        render(){

            if(this.props.hasErrored === true)
                return(<h2>Error</h2>);
            if(this.props.isLoading === true)
            return(<h2>Loading...</h2>);

            return(<div className="personalInfo">
                <h1> Personal Account {this.props.login} <button onClick={this.exit} >Log Out</button></h1>
                <h3> Age: {this.props.info.age}</h3>
                <h3> Sex: {this.props.info.sex}</h3>
                <h3> Height: {this.props.info.height}</h3>
                <h3> Weight: {this.props.info.weight}</h3>
                <h3> Activity: {this.props.info.activity}</h3>
                <h3> Goal: {this.props.info.goal}</h3>
                <Link to="/profileInfoChange">
                    <button onClick={this.submit}> Change </button> </Link></div>)

        }
    }


    const mapStateToProps = (state) => {
        return {
            login: state.logic.login,
            signed: state.logic.signed,
            isLoading: state.logic.isLoading,
            hasErrored: state.logic.hasErrored,
            info: state.logic.info
        };
    };

    const mapDispatchToProps = (dispatch) => {
        return {
            fetchData: (url) => dispatch(itemsFetchData(url)),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);


