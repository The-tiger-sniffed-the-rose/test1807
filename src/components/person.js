import React,{Component} from 'react'
import '../scss/person.scss'
class Person extends Component{
    constructor(props){
        super(props)
        this.state={
            arr:[],
            sum_price:0
        }
        console.log(props)
    }
    render(){
        return  <div>
                    <div className="productList">
                    <div className="productLeft"></div>
                    <div className="productRight">
                        <div className="pruductNumChoice clear">
                            <span className="pruductNumBtn">+</span>
                            <input type="text" />
                            <span className="pruductNumBtn">-</span>
                        </div>
                    </div>
                    </div> 
                    <div className="productList">
                    </div> 
                </div>
    }
} 
export default Person