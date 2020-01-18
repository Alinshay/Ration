import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {tryExit} from "../actions/actions";



class NavBar extends React.Component {

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
                <nav>
               <div className="NavBar">
                   <h1> RATION </h1>
                   <div className="links">
                   <Link to="/">Main</Link>
                   <Link to="/profile">Info</Link>
                   <Link to="/calculator">Calculator</Link>
                   <Link to="/challenge">Challenge</Link>
                   </div>
               </div>
                </nav>
            );

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

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
