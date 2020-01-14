import React from 'react';
import { connect } from 'react-redux';
import LogIn from './SignIn'
import Register from "./SignUp";
import PersonalInfo from "./PersonalInfo";
import {tryExit} from "../actions/actions";

class PersonalAccount extends React.Component {

    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
    }

    exit() {
        this.props.signOut();
    }

    render(){
        return( <div className="personalAccount"> <h1> Personal Account {this.props.login} </h1>
        <PersonalInfo/>
        <button onClick={this.exit} >Log Out</button>
        </div>

         )
    }

}


const mapStateToProps = (state) => {
    return {
        signed: state.logic.signed,
        login: state.logic.login,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(tryExit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PersonalAccount);
