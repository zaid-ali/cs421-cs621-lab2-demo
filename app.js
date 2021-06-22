//Factorial Problem

// n! = n*(n-1)*(n-2)(n-3)...1




//Get access to all HTML elements
const num_html = document.getElementById("number"); //this is the number input field
const form = document.getElementById("form"); //This is the form, where we will listen for submit events
const answerElement = document.getElementById("answer"); //Answer element, where we display the answer or errors


form.addEventListener("submit", (e) => {
    e.preventDefault(); //Prevent refreshes
    const num_int = parseInt(num_html.value); /*Take value stored in HTML element (string) and convert
    to number
    */

    if (isNaN(num_int)) { //Check for non number input
        answerElement.innerText = "Please enter a valid number";
    }

    else if (num_int<0) { //Check for negative input
        answerElement.innerText = "Cannot find factorial for negative number";
        
    }



    else {

        //Compute factorial!

        let ans = 1;
        
        for (i=1 ; i<=num_int ; i++) {
            ans = ans*i;
            
        }

        answerElement.innerText = `${num_int}! = ${ans}`; //Display answer in answer div

        

    }

    

});

