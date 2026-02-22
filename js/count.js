// for count Interview and Rejected
let interviewList = [];
let rejectedList = [];



let total = document.getElementById("total");
let interview = document.getElementById("interview");
let rejected = document.getElementById("rejected");

const allCordSection = document.getElementById("all-cards");


//  count 
function applicationCount(){
    total.innerText = allCordSection.children.length;
    interview.innerText = interviewList.length; 
    rejected.innerText = rejectedList.length; 
}
applicationCount()
