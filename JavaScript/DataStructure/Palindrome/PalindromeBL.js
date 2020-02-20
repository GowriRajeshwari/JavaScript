const readline = require('readline-sync');
class dequeue {
    constructor() {
        this.items = [];
    }
    addFront(data){
        this.items.unshift(data);
    }
    addRear(data){
        this.items.push(data);
    }
    removeFront(){
        return this.items.shift();
    }
    removeRear(){
        return this.items.pop();
    }
    isEmpty(){
        if(this.items.length == 0){
            return true;
        }
        else
            return false;
    }
    toarray(){
        for (let i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    }
    size(){
        return this.items.length;
    }

}

module.exports = {
    dequeue,
    sort:(string)=>{
        var a=string.split("");
        return a;
    }

}