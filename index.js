let myLeads = []
const inputEL = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEL.value);
    inputEL.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads() 
})

function renderLeads(){
    let listItem = ""
    for(let i = 0; i<myLeads.length; i++){
    listItem +=  `
    <li>
         <a target='_blank' href='${myLeads[i]}'>
         ${myLeads[i]}
        </a>
    </li>
    `
    }
    ulEl.innerHTML = listItem  
}

