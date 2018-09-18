import React,{Component} from 'react'
import '../scss/position.scss'
import axios from 'axios'
class Position extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],
            strArr:[]
        }
        this.getCityData=this.getCityData.bind(this)
    }
    componentWillMount(){
        let strArr=[]
        for(var i=65;i<=90;i++){
            if(i==73|| i==79 || i==86 || i==87){
				continue;//跳过本次循环
			}
            strArr.push(String.fromCharCode(i))  
        }
        this.setState({
            strArr
        })
        console.log(strArr)
        this.getCityData()
    }
    getCityData(){
        axios.get("/mz/v4/api/city",{params:{__t:new Date().getTime()}})
        .then((res)=>{
            // console.log(res.data.data.cities.pinyin[0])
            let list = res.data.data.cities;
            list =	list.sort((a,b)=>{
                return a.pinyin[0].charCodeAt() - b.pinyin[0].charCodeAt()
            }).map((item)=>{
                return {
                    name:item.name,
                    zm:item.pinyin[0]
                }
                
            })
            console.log(list)  
            this.setState({
                list
            })
        })
    }
    jump(item){
        console.log(item)
        var pos = this.refs[item].offsetTop;
        document.documentElement.scrollTop=pos-64;
    }
    render(){
        let {strArr,list} = this.state;
        return  <div>
                    <h2 className="headStyle">按字母排序</h2>
                    <ul className="clear">
                        {
                            strArr.map((item,index)=>{
                                return <li className="word"  key={index} onClick={this.jump.bind(this,item)}>{item}</li>
                            })
                        }
                      
		            </ul>
                    <ul>
                        {
                            list.map((item,index)=>{
                                return  <li key={index} >
                                            {
                                                index==0 || index!=0 && item.zm!==list[index-1].zm?<h2 ref={item.zm} className="headStyle" >{item.zm}</h2>:""
                                            }
                                            <span className="word">{item.name}</span>
                                        </li>
                            })
                        }
		            </ul>
                </div>
    }
}
export default Position