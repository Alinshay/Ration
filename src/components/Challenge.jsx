import React from 'react';
import { connect } from 'react-redux';
import NavBar from "./Navbar";
import {tryExit} from "../actions/actions";
import './Check.scss';
import {Tabs, TabLink, TabContent} from "react-tabs-redux"




class Challenge extends React.Component {
    constructor(props) {
        super(props);
        this.exit = this.exit.bind(this);
        this.getMonthChallenge = this.getMonthChallenge.bind(this);
        this.state = {data: {m0120: [1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}}
    }

    componentDidMount() {
       // this.setState({data: {month: [1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}})
    }

    exit() {
        this.props.signOut();
        this.props.history.push('/');
    }

   getMonthChallenge(monthName, yearName) {
        let month = '';
        let daysInMonth = new Date('01.10.2020').getMonth();//32 - new Date(this.getFullYear(), this.getMonth(), 32).getDate();

        for (let i = 1; i <= new Date().getDate(); i++) {
            if (i % 7 === 0)
                if (this.state.data.m0120[i] == 1)
                    month += `<input type="checkbox" id="${i}${monthName}${yearName}" checked/> <label for="${i}${monthName}${yearName}" class="check-box" >  </label> <br/>`
                else
                    month += `<input type="checkbox" id="${i}${monthName}${yearName}"/> <label for="${i}${monthName}${yearName}" class="check-box">  </label> <br/>`

            else if (this.state.data.m0120[i] == 1)
                month += `<input type="checkbox" id="${i}${monthName}${yearName}" checked/> <label for="${i}" class="check-box">  </label>`;
            else
                month += `<input type="checkbox" id="${i}${monthName}${yearName}"/> <label for="${i}${monthName}${yearName}" class="check-box">  </label>`;
        }

        for (let i = new Date().getDate() + 1; i <= daysInMonth; i++) {
            if (i % 7 === 0)
                month += `<input type="checkbox" id="${i}${monthName}${yearName}" disabled="true"/> <label for="${i}${monthName}${yearName}" class="check-box"> </label> <br/>`;
            else
                month += `<input type="checkbox" id="${i}${monthName}${yearName}" disabled="true"/> <label for="${i}${monthName}${yearName}" class="check-box"> </label> </div>`;
        }
        return <div className="Container" dangerouslySetInnerHTML={{__html:
           month}}/>
    }

    render(){

            /* <div className="Container" dangerouslySetInnerHTML={{__html:
            month}}/>*/
        return(
            <div className="personalAccount">
                <NavBar/>
                <div className="name">
                <h3> {this.props.login}  </h3>
                <button onClick={this.exit} >Log Out</button>
            </div>
        <div className="Challenge">
            <h2> Challenge </h2>
                <Tabs>
                    <TabLink to="tab1">January</TabLink>
                    <TabLink to="tab2">February</TabLink>
                    <TabLink to="tab3">March</TabLink>

                        <TabContent for="tab1">
                            {this.getMonthChallenge(1,20)}
                        </TabContent>

                    <TabContent for="tab2">
                        {this.getMonthChallenge(2,20)}
                    </TabContent>

                    <TabContent for="tab3">
                        {this.getMonthChallenge(3,20)}
                    </TabContent>
                </Tabs>

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
