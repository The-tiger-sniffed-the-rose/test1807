import React,{Component} from 'react'
import {Route,NavLink,withRouter,Switch,Redirect} from 'react-router-dom'
import Position from './components/position'
import Films from './components/films'
import YingPian from './components/yingpian'
import Home from './components/home'
import Login from './components/login'
import Person from './components/person'
import Header from './components/header/header'
import Nav from './components/header/nav'
import store from './store/store'
import actions from './store/module/action'
import actions2 from './store/module2/action'
class Root extends Component{
    constructor(props){
        super(props)
        this.state={
            n:store.getState().num.n,
            list:store.getState().num.list,
            newList:store.getState().num.newList,
            a:store.getState().num2.a
        }
        store.subscribe(()=>{
            this.setState({
                n:store.getState().num.n,
                list:store.getState().num.list,
                newList:store.getState().num.newList,
                a:store.getState().num2.a
            })
        })
        props.history.listen((location)=>{
            switch(location.pathname){
                case '/':document.title="首页";break;
                case '/position':document.title="城市";break;
                case '/home':document.title="首页";break;
                case '/login':document.title="登录页";break;
                default:document.title="My App";
            }
        })
    }
    componentDidMount(){
        actions.dGetDataAction()
    }
    change(e){
        console.log(this.aaa.value)
        if(e.keyCode==13){
            actions.dispatchAddAction(this.aaa.value)
        }
    }
    flag(index){
        actions.dispatchModifyAction(index)
    }
    render(){
        return  <div className="root">
                    <Header />
                    <Nav />
                    <div className="marginTop"></div>
                    {/* <NavLink to="/position">地址</NavLink> */}
                    <Switch>
                        <Redirect from="/" to="/home" exact/>
                        <Route path="/position" component={Position} />
                        <Route path="/home" component={Home} />
                        <Route path="/login" component={Login} />
                        <Route path="/films" component={Films} />
                        <Route path="/yingpian" component={YingPian} />
                        <Route path="/person" component={Person} />
                    </Switch>
                    {/* <button onClick={actions2.disIncAction.bind(this)}>增加</button>{this.state.a}
                    <button onClick={actions.dDecAction.bind(this)}>减少</button>
                    <input type="text" ref={(node)=>this.aaa=node}  onKeyUp={this.change.bind(this)}/>
                    <ul>
                        {
                            this.state.newList.map((item,index)=>{
                                return  <li key={index} >{item.title}
                                            <input type="checkbox" defaultChecked={item.flag}onClick={this.flag.bind(this,index)}/>
                                        </li>
                            })
                        }
                    </ul> */}
                </div>
    }
}
export default withRouter(Root)