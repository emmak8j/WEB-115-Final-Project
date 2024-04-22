//
// Emma Johnson
// April 22, 2024
// WEB-115 Final Project
//


// Build a webpage displaying a meal plan using the user's input
function build_weekly_planner(fname,lname,goal,breakfast,snack1,lunch,snack2,dinner){
    window.alert("build_weekly_planner() running")
    window.alert("fname: "+fname+", lname: "+lname+", goal: "+goal+", breakfast: "+breakfast+", snack1: "+snack1+", lunch: "+lunch+", snack2: "+snack2+", dinner: "+dinner)
}


// This function will check that the user entered a valid email address
// Will return True or False. If returned True, the rest of the program will run.
function validate_email(email){
    window.alert("validate_email() running")
    return true
}


// This function will clear the form
function clear_form(){
    window.alert("clear_form() running")
}


// The main program for the form page
function  main(){


    // Functionality for the clear button
    let clear = document.getElementById("clear")
    clear.addEventListener("click", function(){
        // Clear the value of all form elements
        clear_form()
    })

    // Functionality for the submit button
    let submit = document.getElementById("submit")
    submit.addEventListener("click", function(){
        let email = document.getElementById("email")
        let valid_email = validate_email(email)

        if (valid_email){
            // Retrieve values entered by the user
            let fname = document.getElementById("fname").value
            let lname = document.getElementById("lname").value
            let goal = document.getElementById("goal").value
            let breakfast = document.getElementById("breakfast").value
            let snack1 = document.getElementById("snack1").value
            let lunch = document.getElementById("lunch").value
            let snack2 = document.getElementById("snack2").value
            let dinner = document.getElementById("dinner").value
            
            // Build the weekly planner webpage
            build_weekly_planner(fname,lname,goal,breakfast,snack1,lunch,snack2,dinner)

            // Clear the form
            clear_form()
    }
        
})
}


main()
