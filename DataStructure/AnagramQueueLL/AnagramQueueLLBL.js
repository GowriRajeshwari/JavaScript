class Node {
    constructor(element) {
        this.element = element;
        this.next = null
    }
} class Queue {
    constructor() {
        this.size = 0;
        this.front = null;
        this.rear = null;
    }
    enqueue(element) {
        var node = new Node(element);
        if (this.rear == null) {
            this.front = this.rear = node;
            return;
        }

        // Add the new node at the end of queue and change rear 
        this.rear.next = node;
        this.rear = node;
        this.size++;
        // console.log(this.size);

    }
    dequeue() {
        if (this.front == null)
            return;
        // Store previous front and move front one node ahead 
        // temp = this.front; 
        let temp =  this.front.element;
        this.front = this.front.next;
        // If front becomes NULL, then change rear also as NULL 
        if (this.front == null){
            this.rear = null;
        }
        return temp;
        
    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    isEmpty() {

        return this.items.length == 0;
    }
    primeNo() {
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
        let str = "";
        for (let j = 0; j < this.size; j++) {
            let ele = this.dequeue();
            str += ele + " ";
        }
        console.log("[" + str + "]");
    }
    isPrime(num) {
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
    anagram(prime) {
        let j3 = 1;
        for (let i = 0; i < prime.length; i++) {
            for (let j = 0; j < prime.length; j++) {
                if (i != j) {
                    if (this.areAnagram(prime[i].toString(), prime[j].toString())) {
                        this.enqueue(prime[i]);
                        break;

                    }
                }
            }
        }

    }
    areAnagram(string1, string2) {
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
    Queue, Node,

}