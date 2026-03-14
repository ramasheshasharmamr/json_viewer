let mode="json"

jsonBtn.onclick=()=>{mode="json";jsonBtn.classList.add("active");xmlBtn.classList.remove("active");clearAll()}
xmlBtn.onclick=()=>{mode="xml";xmlBtn.classList.add("active");jsonBtn.classList.remove("active");clearAll()}

function clearAll(){
  inputData.value=""
  formattedOutput.textContent=""
  treeOutput.innerHTML=""
  showSection("raw")
}

function showSection(tab){
  rawSection.style.display="none"
  formatSection.style.display="none"
  viewSection.style.display="none"

  rawTab.classList.remove("active")
  formatTab.classList.remove("active")
  viewTab.classList.remove("active")

  if(tab==="raw"){rawSection.style.display="block";rawTab.classList.add("active")}
  else if(tab==="format"){formatSection.style.display="block";formatTab.classList.add("active");formatData()}
  else{viewSection.style.display="block";viewTab.classList.add("active");buildTree()}
}

rawTab.onclick=()=>showSection("raw")
formatTab.onclick=()=>showSection("format")
viewTab.onclick=()=>showSection("view")

function formatData(){
  try{
    if(mode==="json"){
      formattedOutput.textContent=JSON.stringify(JSON.parse(inputData.value),null,2)
    }else{
      const xmlDoc=new DOMParser().parseFromString(inputData.value,"text/xml")
      formattedOutput.textContent=new XMLSerializer().serializeToString(xmlDoc)
    }
  }catch{formattedOutput.textContent="Invalid data ❌"}
}

function buildTree(){
  treeOutput.innerHTML=""
  try{
    if(mode==="json"){
      treeOutput.appendChild(createJsonNode(JSON.parse(inputData.value),"root"))
    }else{
      const xmlDoc=new DOMParser().parseFromString(inputData.value,"text/xml")
      treeOutput.appendChild(createXmlNode(xmlDoc.documentElement))
    }
  }catch{treeOutput.textContent="Invalid data ❌"}
}

/* Developer modal */

devBtn.onclick=()=>devModal.style.display="flex"
closeDev.onclick=()=>devModal.style.display="none"
devModal.onclick=e=>{if(e.target===devModal)devModal.style.display="none"}