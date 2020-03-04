/******************************************************************************
* Execution : 1. default node cmd> node CliniqueManagementMain.js
* 2. if nodemon installed cmd> nodemon CliniqueManagementMain.js
*
* Purpose :  Manage a list of Doctors associated with the Clinique. .
*
* @description :  Manage a list of Doctors associated with the Clinique.. ....
*
* @file : CliniqueManagementMain.js
* @overview :  Manage a list of Doctors associated with the Clinique..
* @module : module_name - This is optional if expeclictly its an npm or local package
* @author : Gowri Rajeshwari K <gowrikanaga216@gmail.com>
* @version : v12.14.1
* @since : 18-02-2020
******************************************************************************/
const readline = require('readline-sync');
const callfunction = require('./CliniqueManagementBL');
try {
    let cm = () => {
        let clinique = new callfunction.clinique();
        while (true) {
            console.log("1 => Search Doctor by Name");
            console.log("2 => Search Doctor by Specification");
            console.log("3 => Search Doctor by Availability");
            console.log("4 => search by Patient ID");
            console.log("5 => search the best Doctor");
            console.log("6 => booking appointment check");
            console.log("7 => To Exit");
            let choice = readline.questionInt("Enter your choice : ");
            let Name,Specification,time,PatientId;
            switch (choice) {
                case 1:
                 Name = readline.question("Enter Doctor Name : ");
                clinique.search_DoctorName(Name);
                    break;
                case 2:
                 Specification = readline.question("Enter the speciality you need : ");
                clinique.search_DoctorSpecification(Specification);
                    break;
                case 3:
                 time = readline.questionFloat("Enter time to check doctor availability : ");
                 Specification = readline.question("Enter your specification : ");
                clinique.search_DoctorAvailablity(time,Specification);
                    break;
                case 4:
                 PatientId = readline.questionInt("Enter Patient ID : ");
                clinique.search_PatientID(PatientId);
                    break;
                case 5:
                clinique.getPopularity();
                    break;
                case 6:
                 Name = readline.question("Enter the name of the Doctor : ");
                 Specification = readline.question("Enter Doctor Specification: ");
                    clinique.tokenAvailabile(Name,Specification);
                    break;
                case 7:
                process.exit(0);

            }
        }
    }
    cm();
//    clinique.search_DoctorName("gjsrg");
//    clinique.search_DoctorSpecification("Neurologist");
// clinique.search_DoctorAvailablity(10.30,"Gynacologist");
//  clinique.getPopularity();

// clinique.tokenAvailabile("Gowri","Gynacologist")

}
catch (error) {
    console.log(error);
}