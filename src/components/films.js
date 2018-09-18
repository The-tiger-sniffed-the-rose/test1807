import React,{Component} from 'react'
import '../scss/films.scss'
import axios from 'axios'
class Films extends Component{
    constructor(props){
        super(props)
        this.state={
            comingSoon:[]
        }
    }
    componentDidMount(){
        var timeTamp = new Date().getTime();
        axios.get("/mz/v4/api/film/coming-soon",{params:{ __t:timeTamp,page:1,count:3}})
          .then((res)=>{
             let {comingSoon} = this.state
             comingSoon=res.data.data.films
              console.log(res.data.data.films)
              console.log(comingSoon)
              this.setState({
                comingSoon
              })
          
          })
    }
    render(){
        return  <div className="films">
                    <div className="dividing-line">
                        <div className="films-xian">
                            <span className="upcoming">即将上映</span>
                        </div>
                    </div>
                    <ul>
                        {
                            this.state.comingSoon.map((item,index)=>{
                                return  <li key={item.id} className="films-list">
                                        <img  key={index} src={item.cover.origin} />
                                        <div key={index+"1"} className="film-footer">
                                            <div key={index+"2"}  className="filmName lf">{item.name}</div>
                                            <div key={index+"3"}  className="rg filmTime">12月31号上映</div>
                                        </div>
                                        </li>
                            })
                           
                        }
                        
                    </ul>
                </div>
    }
}
export default Films