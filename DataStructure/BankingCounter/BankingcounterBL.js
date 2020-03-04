const readline = require('readline-sync');
class Queue {
    constructor() {

        this.items = [];
        this.amount = 50000;
        this.count = 0;

    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {

        if (this.isEmpty())
            return "Underflow";
        else {
            this.count++;
            let option = readline.question("person " + this.count + ": enter 'w' for withdraw or 'd' for deposit : ");
            if (option == "w") {
                let useramount = readline.question("Enter amount to withdraw = ");
                if (useramount >= this.amount) {
                    console.log("not enough money");
                }
                else {
                    // let useramount = readline.question("Enter amount to withdraw");
                    this.amount = this.amount - useramount;
                    console.log(this.amount);
                }
            }
            else if (option == "d") {
                let depositamount = readline.question("Enter amount to deposit = ");
                this.amount = parseInt(this.amount) + parseInt(depositamount);
                console.log(this.amount);
            }
            return this.items.shift();
        }

    }
    front() {
        if (this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }
    isEmpty() {

        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }

}

module.exports = {
    Queue

}