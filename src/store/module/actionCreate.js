import {INC,DEC,DATA,MODIFY} from "./const"
var actions={
	incAction(){
		return {
			type:INC
		}
	},
	decAction(){
		return {
			type:DEC
		}
	},
	getDataAction(arr){
		return {
			 type:DATA,
			 arr
		}
	},
	add(title){
		return {
			type:"ADD",
			title
		}
	},
	modify(index){
		return {
			type:MODIFY,
			index
		}
	},
	loginFlag(userName,YZM){
		console.log(userName,YZM)
		// 真实的情况应该是向后台发送数据，账户信息满足，顺别要把客户的信息取回来
		if(userName=="admin"&&YZM=="AAAA"){
			return {
				type:'login',
				msg:'157用户'
			}
		}else{
			return {
				type:'loginError'
			}
		}
		
	}
}

export default actions