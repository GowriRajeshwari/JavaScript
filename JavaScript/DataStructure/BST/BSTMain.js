/******************************************************************************
* Execution : 1. default node cmd> node BSTBL.js
* 2. if nodemon installed cmd> nodemon BSTBL.js
*
* Purpose : Binary Search Tree.
*
* @description :   find the number of different binary search trees that can be created using these nodes.....
*
* @file : BSTBL.js
* @overview : Binary Search Tree .
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./BSTBL');
try {

    // let month = readline.questionInt("enter the month : ");
    //let year = readline.questionInt("enter the year : ");
    var BST = new callfunction.BinarySearchTree(3);
    var ans =  callfunction.printt("abc");
    console.log(ans+" :ans");
    var str="";
    var root;
    let k=0;
    var len=0;
    for(let i=0;i<ans.length;i++){
        var str1= ans[i].split("");
        console.log(str1);
        len=str1.length;
        for(let j=0;j< str1.length;j++){
            console.log(str1[j]);
            BST.insert(str1[j]);
            
        }
        root = BST.getRootNode();
        console.log(len + "len");
        console.log( BST.inorder(root,str,len));
            
    }
   // console.log(arr);
   
  
   

}
catch (error) {
    console.log(error);
}
