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
    insertAt(element, index) {
        if (index > 0 && index > this.size) {
            return false;
        }
        else {
            var node = new Node(element);
            var current, prev;
            current = this.head;
            if (index == 0) {
                node.next = head;
                this.head = node;
            } else {
                current = this.head;
                var it = 0;
                while (it < 2) {
                    it++;
                    prev = current;
                    current = current.next;

                }
                node.next = current;
                prev.next = node;
            }
        }
        this.size++;
    }

    removeFrom(index) {
        if (index > 0 && index > this.size) {
            return -1;
        }
        else {
            var current, prev, it = 0;
            current = this.head;
            prev = current;
            if (index == 0) {
                this.head = current.next;
            }
            else {
                while (it < index) {
                    it++;
                    prev = current;
                    current = current.next;
                }
                prev.next = current.next;
            }
            this.size--;
            return current.element;
        }
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
    indexOf(element) {
        var count = 0;
        var current = this.head;
        while (current != null) {

            if (current.element == element)
                return count;
            count++;
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
            str += curr.element + " ";
            curr = curr.next;
        }
        console.log(str);
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
        
        return this.add(addelement);
    }

}

module.exports = {
    Unorederslinkedlist,
    Node,
    filereading:() =>{
        const fs = require('fs');
        var file= fs.readFileSync("Demofile.txt",'utf8');
        var file1 = file.split(" ");
        return file1;
    }
}