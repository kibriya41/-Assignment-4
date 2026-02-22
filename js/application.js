

// Available Jobs btn 
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

 function toggleBtnColor(id){
    console.log(id);
    
//    remove color 
allBtn.classList.remove('bg-[#3B82F6]','text-white');
interviewBtn.classList.remove('bg-[#3B82F6]','text-white');
rejectedBtn.classList.remove('bg-[#3B82F6]','text-white');

// add text color 
allBtn.classList.add('text-[#64748B]');
interviewBtn.classList.add('text-[#64748B]');
rejectedBtn.classList.add('text-[#64748B]');

// add color 
const showOnly = document.getElementById(id);
showOnly.classList.add('bg-[#3B82F6]','text-white');
 };
