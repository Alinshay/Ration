import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';



class NavBar extends React.Component {


    render(){
            return(
                <nav>
               <div className="NavBar">
                   <Link to="/">Main</Link>
                   <Link to="/profile">Info</Link>
                   <Link to="/calculator">Calculator</Link>
                   <Link to="/challenge">Challenge</Link>
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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
