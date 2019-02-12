import {observable,action,decorate} from 'mobx';

class Store {
    s_item={
        msg : "Hello!",
    time :  Date()
    }
    constructor(props) {     
        this.interval = setInterval(()=>{
            this.s_item.time = Date()
        },1000)
        this.state = {
        }
    }
    
    pauseClock(){
        clearInterval(this.interval)
    }
    
    startClock(){
        this.interval = setInterval(()=>{
            this.s_item.time = Date()
        },1000)
    }
    changemsg(){
        this.s_item.msg = "new msg!"
    }
}

decorate(Store,{s_item:observable,pauseClock:action,changemsg:action,startClock:action})

const store = new Store()

export default store