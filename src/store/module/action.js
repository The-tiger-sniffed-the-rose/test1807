import store from '../store'
import actionCreator from './actionCreate'
import axios from 'axios'
let actions={
    dIncAction(){
        let act= actionCreator.incAction()
        store.dispatch(act)
    },
    dDecAction(){
        let act= actionCreator.decAction()
        store.dispatch(act)
    },
    dGetDataAction(){
            axios.get("/mz/v4/api/city",{params:{__t:new Date().getTime()}}).then((res)=>{
                let act =actionCreator.getDataAction(res.data.data.cities);
                store.dispatch(act)
            })
    },
    dispatchAddAction(title){
        console.log(title)
        let act =actionCreator.add(title);
        store.dispatch(act)
    },
    dispatchModifyAction(index){
        let act =actionCreator.modify(index);
        store.dispatch(act)
    }
}
export default actions