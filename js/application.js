// console.log("hello");
let interviewList = [];
let rejectedList = [];
let currentStatus = "all";



// Available Jobs btn 
const allBtn = document.getElementById("all-btn");
const interviewBtn = document.getElementById("interview-btn");
const rejectedBtn = document.getElementById("rejected-btn");

const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");

const allCardsSection = document.getElementById("all-cards")

const mainSection = document.querySelector("main");

const interviewSection = document.getElementById("interview-section");

const rejectedSection = document.getElementById("rejected-section");

// toggling btn 
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
currentStatus = id;

showOnly.classList.add('bg-[#3B82F6]','text-white');

if(id === "interview-btn"){
  allCardsSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");
  interviewSection.classList.remove("hidden")
  addIntervewCards();
}
else if(id === "rejected-btn"){
  interviewSection.classList.add("hidden");
  allCardsSection.classList.add("hidden");
  rejectedSection.classList.remove("hidden");
   addrejectedCards();
  
}
else if(id === "all-btn"){
  allCardsSection.classList.remove("hidden");
  interviewSection.classList.add("hidden");
  rejectedSection.classList.add("hidden");
}

 };

//  count 
function applicationCount(){
    total.innerText = allCardsSection.children.length;
    interview.innerText = interviewList.length;
    rejected.innerText = rejectedList.length;
}
applicationCount()

mainSection.addEventListener("click", function(){
    console.log(event.target.classList.contains("interview-btn"));
  
    if(event.target.classList.contains("interview-btn")){
    const parentNode = event.target.parentNode.parentNode;
    
    const name = parentNode.querySelector(".name").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status-fo-ap").innerText;
    const summary = parentNode.querySelector(".summary").innerText;

    parentNode.querySelector(".status-fo-ap").innerText = "Interview";

    const cardInfo = {
        name, 
        skill, 
        salary,
        status:"Interview",
        summary
    }

    const exist = interviewList.find(item => item.name == cardInfo.name);

    if(!exist){
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item => item.name != cardInfo.name);

    if(currentStatus = "rejected-btn"){
      addrejectedCards();
    }

    applicationCount();
    }
    else if(event.target.classList.contains("rejected-btn")){
    const parentNode = event.target.parentNode.parentNode;
    
    const name = parentNode.querySelector(".name").innerText;
    const skill = parentNode.querySelector(".skill").innerText;
    const salary = parentNode.querySelector(".salary").innerText;
    const status = parentNode.querySelector(".status-fo-ap").innerText;
    const summary = parentNode.querySelector(".summary").innerText;

    parentNode.querySelector(".status-fo-ap").innerText = "Rejected";

    const cardInfo = {
        name, 
        skill, 
        salary,
        status:"Rejected",
        summary
    }

    const exist = rejectedList.find(item => item.name == cardInfo.name);

    if(!exist){
        rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item => item.name != cardInfo.name);

    if(currentStatus == "interview-btn"){
      addIntervewCards();
    }

    applicationCount();

    // addrejectedCards();

    }
     console.log(event.target.classList.contains("rejected-btn"));
})

// add card on interview sectinon 
function addIntervewCards(){
    interviewSection.innerHTML = '';

    for(let interview of interviewList){
       console.log(interview);
        
       let div = document.createElement("div");
       div.className = "bg-base-100 border border-gray-200 rounded-lg p-6 flex justify-between mb-4"
       div.innerHTML = `
        <div>
            <h4 class="name font-bold text-xl text-[#002C5C] mb-1">
              ${interview.name}
            </h4>
            <p class="skill text-[#64748B] font-light mb-5">${interview.skill}</p>
            <p class="salary text-[#64748B] font-light">
             ${interview.salary}
            </p>
            <div class="my-5">
              <p
                class="status-fo-ap bg-blue-100 text-blue-950 py-2 px-3 rounded-sm w-28 mb-2"
              >
                ${interview.status}
              </p>
              <p class="summary">
                ${interview.summary}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="interview-btn btn text-green-400 border border-green-400">
                interview
              </button>
              <button class="rejected-btn btn text-red-500 border border-red-500">
                Rejected
              </button>
            </div>
          </div>
          <!-- delede btn  -->
          <div>
            <button class="btn rounded-full">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        `
        interviewSection.appendChild(div);
    } 
}

// add card on rejected section 
function addrejectedCards(){
    rejectedSection.innerHTML = '';

    for(let rejected of rejectedList){
       console.log(rejected);
        
       let div = document.createElement("div");
       div.className = "bg-base-100 border border-gray-200 rounded-lg p-6 flex justify-between mb-4"
       div.innerHTML = `
        <div>
            <h4 class="name font-bold text-xl text-[#002C5C] mb-1">
              ${rejected.name}
            </h4>
            <p class="skill text-[#64748B] font-light mb-5">${rejected.skill}</p>
            <p class="salary text-[#64748B] font-light">
             ${rejected.salary}
            </p>
            <div class="my-5">
              <p
                class="status-fo-ap bg-blue-100 text-blue-950 py-2 px-3 rounded-sm w-28 mb-2"
              >
                ${rejected.status}
              </p>
              <p class="summary">
                ${rejected.summary}
              </p>
            </div>
            <div class="flex gap-2">
              <button class="interview-btn btn text-green-400 border border-green-400">
                interview
              </button>
              <button class="rejected-btn btn text-red-500 border border-red-500">
                Rejected
              </button>
            </div>
          </div>
          <!-- delede btn  -->
          <div>
            <button class="btn rounded-full">
              <i class="fa-regular fa-trash-can"></i>
            </button>
          </div>
        `
        rejectedSection.appendChild(div);
    } 
}



