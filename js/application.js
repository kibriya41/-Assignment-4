// console.log("hello");
let interviewList = [];
let rejectedList = [];



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

    const cardInfo = {
        name, 
        skill, 
        salary,
        status,
        summary
    }

    const exist = interviewList.find(item => item.name === cardInfo.name);

    if(!exist){
        interviewList.push(cardInfo);
    }
    addIntervewCades()
    }
    
})

function addIntervewCades(){
    interviewSection.innerHTML = '';

    for(let interview of interviewList){
       console.log(interview);
        
       let div = document.createElement("div");
       div.className = "bg-base-100 border border-gray-200 rounded-lg p-6 flex justify-between"
       div.innerHTML = `
        <div>
            <h4 class="name font-bold text-xl text-[#002C5C] mb-1">
              Modile First Corp
            </h4>
            <p class="skill text-[#64748B] font-light mb-5">React Native Developer</p>
            <p class="salary text-[#64748B] font-light">
              Remote • Full-time • $130,000 - $175,000
            </p>
            <div class="my-5">
              <p
                class="status-fo-ap bg-blue-100 text-blue-950 py-2 px-3 rounded-sm w-28 mb-2"
              >
                Not Applied
              </p>
              <p class="summary">
                Build cross-platform mobile applications using React Native.
                Work on products used by millions of users worldwide.
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
    } 
}
