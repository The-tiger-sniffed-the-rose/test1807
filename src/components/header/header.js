import React,{Component} from 'react'
import '../../scss/header.scss'
import axios from 'axios'
import actions from '../../store/module2/action'
import store from '../../store/store'
import {Route,NavLink,withRouter,Switch,Redirect} from 'react-router-dom'
class Header extends Component{
    constructor(props){
        super(props)
        this.state={
            navFlag:store.getState().num2.navFlag,
            title:store.getState().num2.title
        }
        store.subscribe(()=>{
            this.setState({
                navFlag:store.getState().num2.navFlag,
                title:store.getState().num2.title
            })
        })
        this.changeLinkPos=this.changeLinkPos.bind(this)
        this.changeLinkLog=this.changeLinkLog.bind(this)
    }
    changeLinkPos(){
        this.props.history.push('/position')
    } 
    changeLinkLog(){
        this.props.history.push('/login')
    }
    render(){
        return  <div className="toolbar clear">
                <div className="clear lf toolbarLeft">
                    <div className="iconWrap clear" onClick={actions.disIncAction.bind(this)}>
                        <i className="fa fa-bars"></i>
                    </div> 
                    <h1 className="toolbarTitle">{this.state.title}</h1>
                </div>
                <div className="toolbarRight rg">
                        <div className="left" onClick={this.changeLinkPos}>
                                <span>北京</span>
                                <i className="fa fa-angle-down pos"></i>
                        </div>
                        <div className="left" onClick={this.changeLinkLog}>
                            <i className="fa fa-user-o user"></i>
                        </div>
                </div>
            </div>   
    }
}
export default withRouter(Header)