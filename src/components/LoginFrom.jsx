import React from 'react';
import { connect } from 'react-redux';
import SignIn from './SignIn'
import SignUp from "./SignUp";



class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {type: "signIn"};
        this.func = this.func.bind(this);
    }

    func(value){
        this.setState({ type: value.target.id })
    }

    render(){
        if(this.state.type ==="signIn")
        return(

            <div className="loginForm">

                    <input type="radio" value="option1" name="login" id="signIn"  onClick={this.func} checked={true}/>
                    <label htmlFor="signIn">SIGN IN</label>

                    <input type="radio" name="login" value="option2" id="signUp" onClick={this.func} />
                    <label htmlFor="signUp">SIGN UP</label>

                <SignIn/>
            </div>
        );

        else return( <div className="loginForm">

                <input type="radio" value="option1" name="login" id="signIn"  onClick={this.func}/>
            <label htmlFor="signIn">SIGN IN</label>

                <input type="radio" name="login" value="option2" id="signUp" onClick={this.func} />
            <label htmlFor="signUp">SIGN UP</label>

            <SignUp/>
        </div>);

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

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
