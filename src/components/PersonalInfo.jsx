import React from "react";
import {connect} from "react-redux";
import {itemsFetchData} from "../actions/actions";
import { Link } from 'react-router-dom';
import '../animation.css';





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
            return(<h2>
                <div className="cssload-preloader cssload-loading">
                    <span className="cssload-slice"> </span>
                    <span className="cssload-slice"> </span>
                    <span className="cssload-slice"> </span>
                    <span className="cssload-slice"> </span>
                    <span className="cssload-slice"> </span>
                    <span className="cssload-slice"> </span>
                </div></h2>);

            return(
                <div className="personalInfo">
                <h3> Age: {this.props.info.age}</h3>
                <h3> Sex: {this.props.info.sex}</h3>
                <h3> Height: {this.props.info.height}</h3>
                <h3> Weight: {this.props.info.weight}</h3>
                <h3> Activity: {this.props.info.activity}</h3>
                <h3> Goal: {this.props.info.goal}</h3>
                <Link to="/profileInfoChange">
                <button onClick={this.submit}> Change </button> </Link></div>
                )

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
            fetchData: (login) => dispatch(itemsFetchData(login)),
        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfo);


