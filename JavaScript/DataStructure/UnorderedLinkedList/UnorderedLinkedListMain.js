/******************************************************************************
* Execution : 1. default node cmd> node UnorderedLinkedListBL.js
* 2. if nodemon installed cmd> nodemon UnorderedLinkedListBL.js
*
* Purpose : Unodered Linked List.
*
* @description : Read the Text from a file, split it into words and arrange it as Linked List. 
Take a user input to search a Word in the List.
If the Word is not found then add it to the list, and if it found then remove the word from the List. 
In the end save the list into a file....
*
* @file : UnorderedLinkedListBL.js
* @overview : Getting the sorted array.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./UnorderedLikedListBL');
try {
    var ll = new callfunction.Unorederslinkedlist();
    let filereading = callfunction.filereading();
    let addelement = readline.question("Enter the value to add : ");
    for(let i=0 ;i<filereading.length ;i++){
        ll.add(filereading[i]); 
    }
    let search = ll.search(addelement,filereading);
    //console.log(search);
    ll.printList();
}
catch (error) {
    console.log(error);
}