const fs = require('fs');
const readline = require('readline-sync');
class clinique {
    constructor() {
        this.Doctor=[];
        this.Patient=[];
        let jsonread = fs.readFileSync("CliniqueDetails.json");
        let json_con_obj = JSON.parse(jsonread);
        this.clinique={};
        this.clinique.Doctor = json_con_obj.Doctor;
        this.clinique.Patient = json_con_obj.Patient;
    }
    search_DoctorName(Name) {
        let index = 0;
        for (let i = 0; i < this.clinique.Doctor.length; i++) {
            if (this.clinique.Doctor[i].Name == Name) {
                index = 1;
                console.log(this.clinique.Doctor[i]);
            }
        }
        if (index == 0)
            console.log("No Doctor is found");
    }
    search_DoctorID(ID) {
        let index = 0;
        for (let i = 0; i < this.clinique.Doctor.length; i++) {
            if (this.clinique.Doctor[i].ID == ID) {
                index = 1;
                console.log(this.clinique.Doctor[i]);
            }
        }
        if (index == 0)
            console.log("No Doctor is found");
    }
    search_DoctorSpecification(Specification) {
        let index = 0;
        for (let i = 0; i < this.clinique.Doctor.length; i++) {
            if (this.clinique.Doctor[i].Specification == Specification) {
                index = 1;
                console.log(this.clinique.Doctor[i]);
            }
        }
        if (index == 0)
            console.log("No Doctor is found");
    }
    search_DoctorAvailablity(time,Specification) {
        let index = 0;
        for (let i = 0; i < this.clinique.Doctor.length; i++) {
            if (time >= this.clinique.Doctor[i].Availability_from && time <= this.clinique.Doctor[i].Availability_to) {
                index = 1;
               this.search_DoctorSpecification(Specification);
            }
        }
        if (index == 0)
            console.log("No Doctor Avaliable on that time");
    }
    getPopularity(){
        for (let i = 0; i < this.clinique.Doctor.length; i++) {
            for (let j = 0; j < this.clinique.Doctor.length; j++) {
                if(this.clinique.Doctor[i].Popularity > this.clinique.Doctor[j].Popularity ){
                    var temp = this.clinique.Doctor[i].Popularity;
                    this.clinique.Doctor[j].Popularity = this.clinique.Doctor[i].Popularity;
                    this.clinique.Doctor[j].Popularity = temp;
                }
            }
        }
        for(let i = 0; i < this.clinique.Doctor.length; i++ ){
               console.log((i+1)+" : "+ this.clinique.Doctor[i].Name);
        }
    }
    search_PatientID(PatientId){
        let index = 0;
        for (let i = 0; i < this.clinique.Patient.length; i++) {
            if (this.clinique.Patient[i].PatientId == PatientId) {
                index = 1;
                console.log(this.clinique.Patient[i]);
            }
        }
        if (index == 0)
            console.log("No Patient is found");

    }
    tokenAvailabile(Name,Specification){
        for(let i = 0; i < this.clinique.Doctor.length; i++ ){
            if (this.clinique.Doctor[i].Specification == Specification) {
                if (this.clinique.Doctor[i].Name == Name){
                    if(this.clinique.Doctor[i].No_of_Patient < 5){
                        this.clinique.Doctor[i].No_of_Patient =parseInt(this.clinique.Doctor[i].No_of_Patient+1);
                      console.log("Appoiment is booked"+this.clinique.Doctor[i].No_of_Patient);
                      fs.writeFileSync("CliniqueDetails.json",JSON.stringify(this.clinique));
                    }
                    else{
                        console.log("Doctor is busy,Come tommorow");  
                    }
                }  
            }
        }


    }
    
}
module.exports = {
    clinique
}