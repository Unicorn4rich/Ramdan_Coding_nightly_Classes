// Student Management System

import inquirer from "inquirer"


// is console se hmare terminal mein jo bhi commands opar run hu huwi hongi ye unko automatic clear kar dega jab bhi ham
// is project ko run karenge to terminal ki pehly ki commands (cls) kar ke clear karne ki zrorat nahi paregi....
console.clear();


// ye hamne OOP ki class create ki hai jisme student ka data lenge....
class Student_cl {
    name: string
    id: number
    course: string
    fees: "paid" | "unpaid"
    balance: string


    constructor(name: string, id: number, course: string, fees: "paid" | "unpaid", balance: string){

        this.name = name
        this.id = id
        this.course = course
        this.fees = fees
        this.balance = balance
        
    }
};


// <--------------------------------------------------END--------------------------------------------------------->
// Veriables or Arrays yahn Store kiyye gaye hain All Student Data ke....

let Student_Name = "";
let Student_id = 100;
let Student_Course = "";
let Student_Fee: "paid" | "unpaid" = "unpaid";
let Student_Balance = ""

let class_call: any;

let Student_data_Array: any = [];

let Array_Get: any = [];

let Show_Full_Profile: any = [];

let condition = true;

// <--------------------------------------------------END--------------------------------------------------------->
// Asking Data from User Using Inquirer

do{

let Student = await inquirer.prompt(
    {
        name: "choose",
        message: "PLEASE CHOOSE AN OPTION ?",
        type: "list",
        choices: ["ENROLL", "REMOVE ENROLL STUDENTS", "CHECK STATUS", "TOTAL STUDENTS", "EXIT"]
    }
)


// <--------------------------------------------------END--------------------------------------------------------->
// Enroll Option Work Start from here

if(Student.choose === "ENROLL"){

    let User_info = await inquirer.prompt([
        {
            name: "name1",
            message: "WHAT IS YOUR NAME ?",
            type: "input"
        },
        {
            name: "course",
            message: "SELECT YOUR COURSE",
            type: "list",
            choices: ["ARTIFICIAL INTELIGENCE", "AMAZON", "GRAPHICS DESIGNING"]
        }
    ]);




// Artificial Inteligence Option Work Start from here
if(User_info.course === "ARTIFICIAL INTELIGENCE"){

    let Confirm1 = await inquirer.prompt(
        {
            name: "ai",
            message: "DO YOU WANT TO ENROLL (ARTIFICIAL INTELIGENCE) FOR $10000 ?",
            type: "confirm"
        }
    );


    if(Confirm1.ai === true){

        Student_Name = User_info.name1;
        ++Student_id;
        Student_Course = User_info.course;
        Student_Balance = "$10000";
        Student_Fee = "paid";

        console.log(`NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`)

    }
    else{
        console.log("THANKS FOR COMMING")
    }

}




// Amazon Option Work Start from here
   if(User_info.course === "AMAZON"){

    let Confirm2 = await inquirer.prompt(
        {
            name: "amz",
            message: "DO YOU WANT TO ENROLL (AMAZON) FOR $5000 ?",
            type: "confirm"
        }
    );


    if(Confirm2.amz === true){

        Student_Name = User_info.name1;
        ++Student_id;
        Student_Course = User_info.course;
        Student_Balance = "$5000";
        Student_Fee = "paid";

        console.log(`NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`);

    }
    else{
        console.log("THANKS FOR COMMING");
    }

   }




// Graphics Designing Option Work Start from here
   if(User_info.course === "GRAPHICS DESIGNING"){

    let Confirm3 = await inquirer.prompt(
        {
            name: "gd",
            message: "DO YOU WANT TO ENROLL (GRAPHICS DESIGNING) FOR $6000 ?",
            type: "confirm"
        }
    );


    if(Confirm3.gd === true){

        Student_Name = User_info.name1;
        ++Student_id;
        Student_Course = User_info.course;
        Student_Balance = "$6000";
        Student_Fee = "paid";

        console.log(`NOTE DOWN YOUR ID CARD NUMBER ${Student_id}`);

    }
    else{
        console.log("THANKS FOR COMMING");
    }

   }


  class_call = new Student_cl( Student_Name, Student_id, Student_Course, Student_Fee, Student_Balance,);

  Array_Get = Student_data_Array.push(class_call);
    
}


// <-----------------------------------------------END--------------------------------------------------->
// Remove Enrollment STudent Option Work Start from here


else if(Student.choose === "REMOVE ENROLL STUDENTS"){

   let Show_names = Student_data_Array.map((item: any) => item.name);

   let Student_data = await inquirer.prompt(
    {
        name: "remove",
        message: "PLEASE SELECT YOUR NAME ?",
        type: "list",
        choices: Show_names
    }
   );


 let index = Student_data_Array.findIndex((student: any) => student.name === Student_data.remove);

    if(index !== -1){

       let removed = Student_data_Array.splice(index, 1);
       --Array_Get;

       console.log(`YOU REMOVED ${removed[0].name}`);

    }

}



// <-----------------------------------------------END--------------------------------------------------->
// Check Status Option Work Start from here


else if(Student.choose === "CHECK STATUS"){

   let Show_names2 = Student_data_Array.map((item: any) => item.name);

   let Student_Status = await inquirer.prompt(
    {
        name: "select",
        message: "SELECT YOUR STUDENT NAME ?",
        type: "list",
        choices: Show_names2
    }
   );


   if(Student_Status.select){

    Show_Full_Profile = Student_data_Array.find((prof: any) => prof.name === Student_Status.select);

    console.log(`
        NAME    : ${Show_Full_Profile.name}
        ID      : ${Show_Full_Profile.id}
        COURSE  : ${Show_Full_Profile.course}
        FEE     : ${Show_Full_Profile.fees}
        BALANCE : ${Show_Full_Profile.balance}
        `);

   };


}



// <-----------------------------------------------END--------------------------------------------------->
// Total Student Option Work Start from here


else if(Student.choose === "TOTAL STUDENTS"){

    console.log(`TOTAL ENROLL STUDENTS ${Array_Get}`);

}


// <-----------------------------------------------END--------------------------------------------------->
// Exit Option Work Start from here

else if(Student.choose === "EXIT"){
    condition = false;
}

} while (condition);


console.log("THANK YOU FOR VISIT OUR ACADEMY");