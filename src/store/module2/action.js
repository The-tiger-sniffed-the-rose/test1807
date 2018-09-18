import store from '../store'
let actions2={
    disIncAction(){
        store.dispatch({
            type:"navFlagChange"
        })
    },
    disTitleAction(text){
        store.dispatch({
            type:"navTitleChange",
            text
        })
    }
}
export default actions2
    