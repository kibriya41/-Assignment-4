// // for count Interview and Rejected
// let interviewList = [];
// let rejectedList = [];


// let total = document.getElementById("total");
// let interview = document.getElementById("interview");
// let rejected = document.getElementById("rejected");

// const allCordSection = document.getElementById("all-cards");

// const mainContainer = document.querySelector("main")

// const interviewSection = document.getElementById(interview-section);
// // console.log(interviewSection);




// //  count 
// function applicationCount(){
//     // total.innerText = allCordSection.children.length;
//     total.innerText = allCordSection.children.length;
//     interview.innerText = interviewList.length; 
//     rejected.innerText = rejectedList.length; 
// }
// applicationCount();


// mainContainer.addEventListener("click", function(){
//     const parentNode = event.target.parentNode.parentNode;

//     const name = parentNode.querySelector(".name").innerText;
//     const skill = parentNode.querySelector(".skill").innerText;
//     const salary = parentNode.querySelector(".salary").innerText;
//     const status = parentNode.querySelector(".status-fo-ap").innerText;
//     const summary = parentNode.querySelector(".summary").innerText;

    
//     const cardInfo ={
//         name, 
//         skill,
//         salary,
//         status,
//         summary
//     }
    
//    const exist = interviewList.find(iten => iten.name == cardInfo.name);
    
//     if(!exist){
//         interviewSection.push(cardInfo);
//     }
//     // addIntervewCades();
    
// })

// function addIntervewCades(){
//     interviewSection.innerHTML = "";

//     for(let intervie of interviewList){
//         console.log(intervie);
        
//         let div = document.createElement("div");
//        div.className = 'bg-base-100 border border-gray-200 rounded-lg p-6 flex justify-between'
//        div.innerHTML = `
       
//           <div>
//             <h4 class="name font-bold text-xl text-[#002C5C] mb-1">
//               Modile First Corp
//             </h4>
//             <p class="skill text-[#64748B] font-light mb-5">React Native Developer</p>
//             <p class="salary text-[#64748B] font-light">
//               Remote • Full-time • $130,000 - $175,000
//             </p>
//             <div class="my-5">
//               <p
//                 class="status-fo-ap bg-blue-100 text-blue-950 py-2 px-3 rounded-sm w-28 mb-2"
//               >
//                 Not Applied
//               </p>
//               <p class="summary">
//                 Build cross-platform mobile applications using React Native.
//                 Work on products used by millions of users worldwide.
//               </p>
//             </div>
//             <div class="flex gap-2">
//               <button class="btn text-green-400 border border-green-400">
//                 interview
//               </button>
//               <button class="btn text-red-500 border border-red-500">
//                 Rejected
//               </button>
//             </div>
//           </div>
//           <!-- delede btn  -->
//           <div>
//             <button class="btn rounded-full">
//               <i class="fa-regular fa-trash-can"></i>
//             </button>
//          </div>

//        `
//     }
// }