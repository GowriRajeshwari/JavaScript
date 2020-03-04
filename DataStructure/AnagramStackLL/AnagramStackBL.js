class Node{
    constructor(element) {
        this.element = element;
         this.next = null
    }
}class Stack {
    constructor() {
        this.items = [];
        this.top=null;
        this.size = 0;
    }
    push(element) {
        var node = new Node(element);
        if(this.top == null){
            node.next = null;
            this.size++;
        }
        else{
            node.next = this.top;
            this.size++;
        }
        this.top = node;
        
    }
    pop() {
        if (this.top == null)
            console.log( "Underflow");
        else {
            let temp = this.top;
            this.top = this.top.next;
            temp.next = null;
            return temp.element;
           // this.size--;
        }
    }
    isEmpty() {
        return this.items.length == 0;
    }
    print() {
        var str = "";
        let temp = this.top;
        while(temp.next != null){
            console.log(temp.element);
            temp = temp.next;
        }
        console.log(temp.element);
        //return str;
    }

    primeNo(){
        let array = [[]];
        var start = 0;
        var end = 100;
        var j1 = 0, j2 = 0;
        for (var i = 0; i < 10; i++) {
            array[i] = [[]];
        }
        start = 0;
        end = 1000;
        var prime = [];
        for (let j = start; j <= end; j++) {
            if (this.isPrime(j)) {
                prime[j2] = j;
                j2++;
            }
        }
        this.anagram(prime);
        j2 = 0;
        let str="";
        for (let j = 1; j < this.size; j++) {
         let ele= this.pop();
           str += ele +" ";
        }
        console.log("["+str+"]");
    }
    isPrime(num){
        if (num == 0 || num == 1) {
            return false;
        }
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                return false;
            }
        }
        return true;

    }
    anagram(prime){
        let j3 = 1;
        for (let i = 0; i < prime.length; i++) {
            for (let j = 0; j < prime.length; j++) {
                if (i != j) {
                    if (this.areAnagram(prime[i].toString(), prime[j].toString())) {
                       this.push(prime[i]);
                       break;

                    }
                }
            }
        }

    }
    areAnagram(string1, string2){
        if (string1.length != string2.length) {
            return false;
        }
        var res1 = string1.split("");
        res1.sort();
        var res2 = string2.split("");
        res2.sort();
        for (let i = 0; i < res2.length; i++) {
            if (res1[i] != res2[i]) {
                return false;
            }
        }
        return true;
    }

}
module.exports = {
    Stack,Node,
    
}