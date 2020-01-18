import React from 'react';
import { connect } from 'react-redux';
import PersonalInfo from "./PersonalInfo";
import {tryExit} from "../actions/actions";
import PersonalInfoChange from "./PersonalInfoChange";
import NavBar from "./Navbar";

class PersonalAccount extends React.Component {

    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.state={info: true}
    }

    exit() {
        this.props.signOut();
        this.props.history.push('/');
    }

    render(){
        return( <div className="personalAccount">
                <NavBar/>
                <div className="name">
                    <h3> {this.props.login}  </h3>
                    <button onClick={this.exit} >Log Out</button>
                </div>
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
