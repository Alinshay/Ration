import React from 'react';
import { connect } from 'react-redux';
import LogIn from './SignIn'
import Register from "./SignUp";
import LoginForm from "./LoginFrom";
import PersonalAccount from "./PersonalAccount";
import PersonalInfo from "./PersonalInfo";
import Main from "./Main";



class Home extends React.Component {


    render(){
        if(this.props.signed === 0)
        return(
            <div className="Home">
                <LoginForm/>
            </div>
        );
        else return( <Main/> )
    }

}/*перейти по ссылке*/


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

export default connect(mapStateToProps, mapDispatchToProps)(Home);
