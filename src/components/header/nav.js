import React,{Component} from 'react'
import '../../scss/nav.scss'
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import actions from '../../store/module2/action'
import store from '../../store/store'
class ToolBar extends Component{
    constructor(props){
        super(props)
        this.arr=[{
            id:1,
            text:'首页',
            path:'/home'
            },{
                id:2,
                text:'影片',
                path:'/yingpian'
            },{
                id:3,
                text:'影院',
                path:'/Cinema'
            },{
                id:4,
                text:'商城',
                path:'/shoppingMall'
            },{
                id:5,
                text:'我的',
                path:'/my'
            },{
                id:6,
                text:'卖座卡',
                path:'/saleCard'
            }]
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

    }
    changeNavFlag(text){
        actions.disIncAction()
        actions.disTitleAction(text)
        
    }
    render(){
        return  <div className="nav" style={{display:this.state.navFlag?'block':'none'}} >
                <div className="nav">
                    <ul>
                        {
                            this.arr.map((item,index)=>{
                               return <li key={item.id} onClick={this.changeNavFlag.bind(this,item.text)} >
                                    <NavLink to={item.path} >
                                        {item.text}
                                        <i className="fa fa-angle-right"></i>
                                    </NavLink> 
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="gray" onClick={actions.disIncAction.bind(this)}></div>
                </div>
    }
}
export default ToolBar