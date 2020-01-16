import React from 'react';
import { connect } from 'react-redux';
import PersonalInfo from "./PersonalInfo";
import {tryExit} from "../actions/actions";
import PersonalInfoChange from "./PersonalInfoChange";

class PersonalAccount extends React.Component {

    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.state={info: true}
    }

    exit() {
        this.props.signOut();
    }

    changeForm(){
        this.setState({info: false})
    }

    render(){
        if(this.state.info)
        return( <div className="personalAccount"> <h1> Personal Account {this.props.login} <button onClick={this.exit} >Log Out</button></h1>
            <PersonalInfo/>
            </div>
         )
        else
        return(
            <div className="personalAccount"> <h1> Personal Account {this.props.login} <button onClick={this.exit} >Log Out</button></h1>
            <PersonalInfo/>
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
