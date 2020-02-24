class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        // root of a binary seach tree 
        this.root = null;
    }
    insert(data) {
        // Creating a node and initailising  
        // with data  
        var newNode = new Node(data);

        // root is null then node will 
        // be added to the tree and made root. 
        if (this.root === null)
            this.root = newNode;
        else

            // find the correct position in the  
            // tree and add the node 
            this.insertNode(this.root, newNode);
    }

    // Method to insert a node in a tree 
    // it moves over the tree to find the location 
    // to insert a node with a given data  
    insertNode(node, newNode) {
        // if the data is less than the node 
        // data move left of the tree  
        if (newNode.data < node.data) {
            // if left is null insert node here 
            if (node.left === null)
                node.left = newNode;
            else

                // if left is not null recurr until  
                // null is found 
                this.insertNode(node.left, newNode);
        }

        // if the data is more than the node 
        // data move right of the tree  
        else {
            // if right is null insert node here 
            if (node.right === null)
                node.right = newNode;
            else

                // if right is not null recurr until  
                // null is found 
                this.insertNode(node.right, newNode);
        }
    }
    getRootNode() {
        //console.log(this.root.data);
        return this.root;
    }
    inorder(node, str, len) {
        //var str ="";
        console.log("str1 : " + str.length + len);
        let i = 0;
        if (str.length == len) {
            console.log("str2 : " + str);
            return str;
        } else {
            if (node != null) {
                console.log("node data : " + node.data);
                str = str + node.data;
                i++;
                this.inorder(node.left, str, len);
                // console.log(node.data); 
                this.inorder(node.right, str, len);
            }
        }

        
    }

}
module.exports = {
    BinarySearchTree,
    printt: (str, ans) => {
        var array = [];
        let i = 0;
        let permutations = module.exports.permut(str);
        for (permutation of permutations)
            console.log(permutation);
        return permutations;
    },
    permut: (string) => {
        if (string.length < 2) return string; // This is our break condition
        var permutations = []; // This array will hold our permutations
        for (var i = 0; i < string.length; i++) {
            var char = string[i];
            if (string.indexOf(char) != i) // if char was used already
                continue; // skip it this time
            var remainingString = string.slice(0, i) + string.slice(i + 1, string.length); //Note: you can concat Strings via '+' in JS
            for (var subPermutation of module.exports.permut(remainingString))
                permutations.push(char + subPermutation)
        }
        return permutations;
    }
}