treeOutput.addEventListener("contextmenu",function(e){
  const li=e.target.closest("li")
  if(!li) return

  const ul=li.querySelector(":scope > ul")
  const toggle=li.querySelector(":scope > .toggle")
  if(!ul||!toggle) return

  e.preventDefault()

  menu.innerHTML=""

  addItem("Expand",()=>{ul.style.display="block";toggle.textContent="−"})
  addItem("Collapse",()=>{ul.style.display="none";toggle.textContent="+"})

  menu.style.left=e.pageX+"px"
  menu.style.top=e.pageY+"px"
  menu.style.display="block"
})

function addItem(text,action){
  const div=document.createElement("div")
  div.textContent=text
  div.onclick=()=>{action();menu.style.display="none"}
  menu.appendChild(div)
}

document.onclick=()=>menu.style.display="none"