import React,{Component} from 'react'
import '../scss/login.scss'
import {connect} from 'react-redux'
import actionCreator from "../store/module/actionCreate"
import {bindActionCreators} from "redux";
class Login extends Component{
    constructor(props){
        super(props)
        this.state={
            username:"",
            password:""
        }
        // this.change= this.change.bind(this)
        // this.submit= this.submit.bind(this)
    }
    login(e){
        this.props.loginFlag(this.userPhoneText.value,this.userYZMText.value)
        // 向后台发送数据，进行验证，如果验证成功，执行上边的函数，并且将请求回来的数据传到state进行共享
        // 跳转到个人页面
            this.props.history.push("/person")
        
    }
    render(){
        console.log(this.props)
        
        return  <div className="login">
                    <div className="loginMsg">
                        <input type="text" ref={(node)=>this.userPhoneText=node} placeholder="请输入手机号"/>
                    </div>
                    <div className="bottomrule"></div>
                    <div className="loginMsg">
                        <input type="text" ref={(node)=>this.userYZMText=node} placeholder="输入验证码"/>
                    </div>
                    <div className="bottomrule"></div>
                    <button className="loginBtn" onClick={this.login.bind(this)}>登入</button>
                </div>
    }
}
var mapStateToProps=(state)=>{
    console.log(state)
    return{
        loginStateFlag:state.num.loginStateFlag,
        stateFlag:state.num.loginStateFlag?"登入成功":"登陆失败"
    }
}
export default connect(mapStateToProps,(dispatch)=>bindActionCreators(actionCreator,dispatch))(Login)