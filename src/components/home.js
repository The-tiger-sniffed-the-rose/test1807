import React,{Component} from 'react'
import '../scss/home.scss'
import Swiper from 'swiper'
import'../../node_modules/swiper/dist/css/swiper.css'
import axios from 'axios'
import Films from './films'
class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            list:[],//轮播图数据
            comingSoon:[],
            btnObj:{
                vis:false
            }
        }
        this.getData= this.getData.bind(this)
        this.getData()
    }

    getData(){
        var timeTamp = new Date().getTime();
        axios.get("/mz/v4/api/billboard/home",{params:{__t:timeTamp}})
        .then((res)=>{
           let {list} =this.state
           list= res.data.data.billboards;
           this.setState({
               list
           })
           console.log(list)
        })
    }
    componentDidUpdate(){
        if(!this.swiper){
            this.swiper = new Swiper(".box",{
                    loop:true,
                    autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                    },
                })   
          }
    }
    render(){
        return <div className="home clear">
                <div className="box">
                    <div className="swiper-wrapper">
                    {
                         this.state.list.map((item,index)=>{
                            return <div className="swiper-slide" key={item.id}>
                                <img src={item.imageUrl} title={item.name}/>
                            </div>
                        })   
                    }     
                    </div>    
                </div> 
                <div className="main">
                    {/* <nowPlaying></nowPlaying> */}
                    <Films />
                </div>
            </div> 
    }
}
export default Home