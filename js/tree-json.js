function createJsonNode(value,key){
  const li=document.createElement("li")

  if(typeof value==="object" && value!==null){
    const toggle=document.createElement("span")
    toggle.textContent="+"
    toggle.className="toggle"

    const label=document.createElement("span")
    label.innerHTML=Array.isArray(value)
      ? `<span class="array">${key}: [ ]</span>`
      : `<span class="key">${key}: { }</span>`

    const ul=document.createElement("ul")
    ul.style.display="none"

    toggle.onclick=()=>{
      const open=ul.style.display==="block"
      ul.style.display=open?"none":"block"
      toggle.textContent=open?"+":"−"
    }

    for(let k in value){
      ul.appendChild(createJsonNode(value[k],k))
    }

    li.append(toggle,label,ul)
  }else{
    li.innerHTML=`<span class="key">${key}:</span> ${value}`
  }

  return li
}