import React from 'react';
import { connect } from 'react-redux';
import LogIn from './SignIn'
import Register from "./SignUp";
import LoginForm from "./LoginFrom";



class Home extends React.Component {

    render(){
        return(
            <div className="Home">
                <LoginForm/>
            </div>


        );
    }
}


const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
