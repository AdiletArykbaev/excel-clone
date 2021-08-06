import { capitalize } from "@core/utils.js";
export class DomListener{
    constructor($root,listeners=[]){
        if(!$root){
            throw new Error("no root provided DOMlistener")
        }
        this.$root = $root;
        this.listeners = listeners;
    }
    initDomListeners(){
        console.log(this.listeners,this.$root);
        this.listeners.forEach(listener =>{
            const method = getMethodName(listener)
            if(!this[method]){
                throw new Error(`Method ${method} not found in ${this.name}`)
            }
            this[method] = this[method].bind(this)
            this.$root.on(listener,this[method])

        })
    }
    removeDomListeners(){
        this.listeners.forEach(listener =>{
            const method = getMethodName(listener)

            this.$root.off(listener,this[method])
        })
    }
}

function getMethodName(eventName){
    return "on" + capitalize(eventName)
}