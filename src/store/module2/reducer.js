import _state from './state'

let reducer2 =(state=_state,action)=> {
    let newState2 = {...state} //浅拷贝
   if(action.type=="navFlagChange"){
        newState2.navFlag=!newState2.navFlag
   }
   if(action.type=="navTitleChange"){
        newState2.title=action.text
    }
    return newState2
}

export default reducer2