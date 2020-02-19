/******************************************************************************
* Execution : 1. default node cmd> node OrderedLinkedListBL.js
* 2. if nodemon installed cmd> nodemon OrderedLinkedListBL.js
*
* Purpose : Odered Linked List.
*
* @description : Read .a List of Numbers from a file and arrange it ascending Order in a Linked List. 
*    Take user input for a number, if found then pop the number out of the list 
*    else insert the number in appropriate position....
*
* @file : OrderedLinkedListBL.js
* @overview : Adding the value to the ordered linked list.
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./OrderedLinkedListBL');
try {
    var ll = new callfunction.Unorederslinkedlist();  
     let filereading = callfunction.filereading();
    let addelement = readline.questionInt("Enter the value to add : ");
    for(let i=0 ;i<filereading.length ;i++){
        if(filereading[i] != " ")
        {
            let element = parseInt(filereading[i]);
            ll.addorder(element); 
        }
        else{
            continue;
        }
      
    }
    console.log(ll.printList());
    let search = ll.search(addelement,filereading);
     let finalans = ll.printList();
     let filesave = callfunction.filesave(finalans);
     console.log("finalans : "+finalans);


    
}
catch (error) {
    console.log(error);
}