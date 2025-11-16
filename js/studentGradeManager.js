//create a system to store and manage student grades

//create a constructor that accept student details
function student(name,id,grades,dateRegister){

  this.name = name;
  this.id = id;
  this.grades = grades;
  this.dateRegister = dateRegister;

};

// assigning details
const student1 = new student(
    "Ritshidze",
    "0503166096084",
    [90,89,90,95],
    new Date()
);


// printing student deatils
console.log("student details")
console.log("Student Name: " + student1.name + 
    "\n"+
    "Student ID: " + student1["id"] +
    "\n" +
    "Student Grades: " + student1.grades +
    "\n" +
    "Regustred Dates: " + student1.dateRegister);


    //another way of displaying
    const details = Object.values(student1);

    console.log(details)