import data from "./state"
import {INC,DEC,DATA,ADD,MODIFY} from "./const"
var reducer = (state=data,action)=>{
    let newState={...state}
    if(action.type===INC){
        newState.n++
    }
    else if(action.type=== DEC){
        newState.n--
    }
    else if(action.type === DATA){
            newState.list=action.arr;
    }  
    else if(action.type === ADD){
        newState.newList.push({
            title:action.title,
            flag:true
        })
    } 
    else if(action.type === MODIFY){
        newState.newList[action.index].flag=!newState.newList[action.index].flag
    }
    else if(action.type === 'login'){
        newState.loginStateFlag=true
    }
    else if(action.type === 'loginError'){
        newState.loginStateFlag=false
    }
    return newState
}

export default reducer;