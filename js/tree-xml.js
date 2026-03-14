function createXmlNode(node){
  const li=document.createElement("li")

  if(node.children.length){
    const toggle=document.createElement("span")
    toggle.textContent="+"
    toggle.className="toggle"

    const label=document.createElement("span")
    label.innerHTML=`<span class="tag">&lt;${node.nodeName}&gt;</span>`

    const ul=document.createElement("ul")
    ul.style.display="none"

    toggle.onclick=()=>{
      const open=ul.style.display==="block"
      ul.style.display=open?"none":"block"
      toggle.textContent=open?"+":"−"
    }

    for(let child of node.children){
      ul.appendChild(createXmlNode(child))
    }

    li.append(toggle,label,ul)
  }else{
    li.innerHTML=`<span class="tag">&lt;${node.nodeName}&gt;</span> ${node.textContent}`
  }

  return li
}