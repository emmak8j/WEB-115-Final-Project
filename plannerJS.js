//
// Emma Johnson
// April 22, 2024
// WEB-115 Final Project
//


// Close the planner webpage
function clear_weekly_planner(){
    window.alert("clear_weekly_planner() running")
}


// Create a document of the weekly planner
function create_planner_document(){
    window.alert("create_planner_document() running")
}


// Download the document created by create_planner_document
function download_weekly_planner(doc){
    window.alert("download_weekly_planner() running")
}


// Print the document created by create_planner_document
function print_weekly_planner(doc){
    window.alert("print_weekly_planner() running")
}


// The main program
function main(){
     // Functionality for the three buttons
     let clear = document.getElementById("clear")
     let download = document.getElementById("download")
     let print = document.getElementById("print")
 
     clear.addEventListener("click", function(){
         clear_weekly_planner()
     })
 
 
     download.addEventListener("click", function(){
         let doc = create_planner_document()
         download_weekly_planner(doc)
     })
 
 
     print.addEventListener("click", function(){
         let doc = create_planner_document()
         print_weekly_planner(doc)
     })
}


main()
