
// Accessing the data
var numField1 = document.getElementById('numField1');
var numField2 = document.getElementById('numField2');
var resultField = document.getElementById('result');
var action = document.getElementById('results');


// Event listener

function operation(event){
    
     event.preventDefault(); // Prevent form submission
    
    if(!numField1.value || !numField2.value){
        
        alert("Please enter the value in the fields");
    }
    
    else{
        
        var x = parseFloat(numField1.value);
        
        var y = parseFloat(numField2.value);
        
        var resultse = x / y;
        
        var percent = resultse * 100;
        
        resultField.innerText = "Answer: " + percent + "%";
        
    }
}




