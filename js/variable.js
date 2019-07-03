// This is a single line comment

/*
This is
a multi line
comment
*/

console.log("Hello World!");
//UI Component (Buttons)
var input_btn_ViewTracker =
    document.getElementById("input_btn_View Tracker");

//Example For Now
var dummy_section = document.getElementById("dummy_section");

input_btn_reading_log.addEventListener("click",function(){
   console.log("User click on button reading log."); 
    hide_all_view();
    dummy_section.classList.remove("d-none");
    
});

function hide_all_view(){
    dummy_section.classList.add("d-none");
}