import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./Navbar";
import {tryExit} from "../actions/actions";



class Main extends React.Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
    }

    exit() {
        this.props.signOut();
        //this.props.history.push('/');
    }

    render(){
        return(
            <div className="personalAccount">
                <NavBar/>
                <div className="name">
                    <h3> {this.props.login}  </h3>
                    <button onClick={this.exit} >Log Out</button>
                </div>
            <div className="Main"> </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Main);
