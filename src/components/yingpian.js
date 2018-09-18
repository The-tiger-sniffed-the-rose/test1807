import React,{Component} from 'react'
import {NavLink,Route,Switch,Redirect} from 'react-router-dom'
import Playing from './playing'
import Coming from './coming'
import '../scss/yingpian.scss'
class YingPian extends Component{
    constructor(props){
        super(props)
        this.state={
            curIndex:0
        }
    }
    index(n){
        this.setState({
            curIndex:n
        })
    }
    render(){
        return  <div className="yingpianWrap">
                    <div className="yingpianTitle">
                        <div className="now-playing" onClick={this.index.bind(this,0)}><NavLink className={0===this.state.currentIndex?"choice":null} to="/yingpian/playing">正在热映</NavLink></div>
                        <div className="coming-play" onClick={this.index.bind(this,0)}><NavLink to="/yingpian/coming">即将上映</NavLink></div>
                    </div>
                    <Switch>
                        <Redirect from="/yingpian" to="/yingpian/playing" exact/>
                        <Route path="/yingpian/playing" component={Playing} />
                        <Route path="/yingpian/coming" component={Coming} />
                    </Switch>
                </div>
    }
}
export default YingPian