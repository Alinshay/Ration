import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./Navbar";
import {tryExit} from "../actions/actions";




class Calculator extends React.Component {

    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
    }

    exit() {
        this.props.signOut();
        this.props.history.push('/');
    }
    render(){
        return(
            <div className="personalAccount">
                <NavBar/> <h1> Personal Account {this.props.login} <button onClick={this.exit} >Log Out</button></h1>
        <div className="Calculator"> </div>
            </div>
        )
    }

}


const mapStateToProps = (state) => {
    return {
        login: state.logic.login,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        signOut: () => dispatch(tryExit()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Calculator);
