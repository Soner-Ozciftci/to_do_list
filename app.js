// *selector
const input=document.getElementById("todo-input")
// console.log(input);
const btn=document.querySelector("#todo-btn")
const ul=document.querySelector("#todo-ul")
​
//*
let arrList=[]
    
    
  
​
// console.log(ul);
btn.addEventListener("click", (e) =>{
    e.preventDefault()
    
    const li=document.createElement("li")
    ul.prepend(li)
    const span=document.createElement("span")
    li.appendChild(span)
    
    const text=document.createTextNode(input.value)
    span.prepend(text) 
    
    
    const i=document.createElement("i")
    i.className=("fa-solid fa-trash")
    li.appendChild(i)  
    let arrLi={
        id:new Date().getTime(),
        text:input.value
    
    }
    li.setAttribute("id",arrLi.id)
    // console.log(input.value);
    arrList.push(arrLi)
    console.log(arrList);
​
    
​
    // li.innerHTML=`${input.value} <span> <i class="fa-solid fa-trash"></i></span></li>` 
   
    // arrList.push(input.value)
    // console.log(arrList);
    
    // localStorage.setItem("toDoList",JSON.stringify(arrList))
    input.value=""
    input.focus()
})