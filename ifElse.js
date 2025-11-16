//takes student marks and determine wheather student pass fail or got distinction
let marks = 80;
let results = "";

if(marks>60){

    results = "pass";
}

else if(marks>=80){

    results = "distimction";
}
else{

       results = "fail";
  
}

document.getElementById("heading").innerText = results;