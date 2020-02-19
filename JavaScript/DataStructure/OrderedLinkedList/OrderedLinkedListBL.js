const fs = require('fs');
class Node{
    constructor(element) {
        this.element = element;
         this.next = null

    }
}
class Unorederslinkedlist {
    constructor() {
        this.head = null;
        this.size = 0;

    }
    add(element) {
        var node = new Node(element);
        var current;
        if (this.head == null) {
            this.head = node;
        }
        else {
            current = this.head;
            while (current.next) {
                current = current.next;
            }
            current.next = node;
        }
        this.size++;
    }
    addorder(element) {
        var node = new Node(element);
        var current = this.head;
        if ((this.head == null) || (this.head.element >= node.element)) {
            node.next = this.head;
            this.head = node;
        }
        else {
            
            var current = this.head;
            var prev=null;
            while (current != null){
            if( current.element > element ) {
                break;
            }
            else if(current.element < element){
                prev=current;
                current=current.next;
            }
           
             }

                node.next = current;
                prev.next = node;            
        }
        this.size++;
    }

    removeElement(element) {
        var current = this.head;
        var prev = null;

        while (current != null) {
            if (current.element == element) {
                if (prev == null) {
                    this.head = current.next;
                } else {
                    prev.next = current.next;
                }
                this.size--;
                return current.element;
            }
            prev = current;
            current = current.next;
        }
        return -1;
    }
    isEmpty() {
        return this.size == 0;
    }
    size_of_list() {
        return this.size;
    }
    printList() {
        var curr = this.head;
        var str = "";
        while (curr) {
            
            str += curr.element;
            if(curr.next){
                str += " "; 
            }
            curr = curr.next;
        }
        return str;
    }
    search(addelement,filereading){
        let pos = 0;
   
        if(this.head==null) {
           console.log("Linked List not initialized");
           return;
        } 
     
        var current = this.head;
        while(current.next!=null) {
           if(current.element == addelement) {
              //console.log("%d found at position %d\n", addelement, pos);
              this.removeElement(addelement);
              return;
           }
           
           current = current.next;
           pos++;
        }
        
        return this.addorder(addelement);
    }

}

module.exports = {
    Unorederslinkedlist,
    Node,
    filereading:() =>{
        var file= fs.readFileSync("Demofile.txt",'utf8');
        var file1 = file.split(" ");
        //var file2 = file1.sort();
        //console.log(file1);
        return file1;
    },
    filesave:(finalans)=>{
        fs.writeFileSync("Demofile.txt",finalans,{encoding:'utf8',flag:'w'});
        
    }

}