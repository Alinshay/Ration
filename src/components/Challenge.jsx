import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./Navbar";
import {tryExit} from "../actions/actions";
import './Check.scss';




class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
    }

    componentDidMount() {
        Date.prototype.daysInMonth = function() {

          return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
        };
        console.log(new Date().getDate());
        console.log(new Date().daysInMonth());
    }

    exit() {
        this.props.signOut();
        this.props.history.push('/');
    }

    render(){
        Date.prototype.daysInMonth = function() {

            return 32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();
        };
        let month = '';
        for (let i=1; i<=new Date().getDate(); i++)
        {

            if(i%7===0)
                month+=`<input type="checkbox" id="${i}"/> <label for="${i}" class="check-box">  </label> <br/>`
                //month+=`<div class="day"> <label for="${i}"> Day ${i}</label> <br/> <input type="radio" id="${i}" name="${i}" value="${i}"> </div> <br/>`;
            else
                month+=`<input type="checkbox" id="${i}"/> <label for="${i}" class="check-box">  </label>`;
        }

        for (let i=new Date().getDate()+1; i<=new Date().daysInMonth(); i++){
            if(i%7===0)
                month+=`<input type="checkbox" id="${i}" disabled="true"/> <label for="${i}" class="check-box"> </label> <br/>`;
            else
                month+=`<input type="checkbox" id="${i}" disabled="true"/> <label for="${i}" class="check-box"> </label> </div>`;
        }

        return(
            <div className="personalAccount">
                <NavBar/>
                <div className="name">
                <h3> {this.props.login}  </h3>
                <button onClick={this.exit} >Log Out</button>
            </div>
        <div className="Challenge">
            <h2> Challenge </h2>

            <div className="Container" dangerouslySetInnerHTML={{__html:
                month}}>
            </div>

        </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Challenge);
