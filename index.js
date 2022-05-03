let myLeads = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const ulEL = document.getElementById("ul-el");



function renderLeads() {
  
  let listItems = ""
  
  for (let lead of myLeads) {
    
    listItems += `
    <li> 
      <a target="_blank" href=${lead} > 
        ${lead} 
      </a> 
    </li>
    `
    
    
    // const li = document.createElement("li");
    // li.textContent += lead;
    // ulEL.append(li);
  }
  
  ulEL.innerHTML = listItems
}

inputBtn.addEventListener("click", function(){
  myLeads.push(inputEl.value);
  inputEl.value = ""
    renderLeads();
    console.log(myLeads)
  })