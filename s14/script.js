const addForm = document.querySelector("#addForm")
const dataWrap = document.querySelector("#dataWrap")
const singleWrap = document.querySelector("#singleWrap")
const dataInputs = ["name", "age", "email"]
const readFromStorage = (keyName="data") => {
    let data
    try{
        data = JSON.parse(localStorage.getItem(keyName)) || []
        if(!Array.isArray(data)) throw new Error("data must be an array")
    }
    catch(e){
        data = []
    }
    return data
}

const writeToStorage = (data, keyName="data") => localStorage.setItem(keyName, JSON.stringify(data))

const resetStorageData = (keyName="data") => localStorage.removeItem(keyName)

const createMyOwnEle=function(parent, newElement, txt, href, classes){
    let myEle =  document.createElement(newElement)
    parent.appendChild(myEle)
    if(classes) myEle.className=classes
    if(txt) myEle.textContent = txt
    if(href)myEle.href = href
    return myEle
}

const drawElements = (allData)=>{
    dataWrap.innerHTML=""
    allData.forEach(user=>{
        let ele = createMyOwnEle(dataWrap, "tr")
        createMyOwnEle(ele, "td", user.id)
        createMyOwnEle(ele, "td", user.name)
        createMyOwnEle(ele, "td", user.age)
        createMyOwnEle(ele, "td", user.email)
        ele = createMyOwnEle(ele, "td")
        createMyOwnEle(ele, "a", "Show", `show.html?id=${user.id}`, "btn btn-primary ms-3")
        createMyOwnEle(ele, "a", "Edit", `edit.html?id=${user.id}`, "btn btn-success ms-3")
        const delBtn = createMyOwnEle(ele, "button", "Delete", null, "btn btn-danger ms-3")
        delBtn.addEventListener("click", ()=> { deleteItem(user.id, allData) })
    })
}

const deleteItem = (id, allData) =>{
    allData = allData.filter( el => el.id != id )
    writeToStorage(allData)
    // window.location.reload()
    drawElements(allData)        
}
if(addForm){
    addForm.addEventListener("submit", function(e){
        e.preventDefault()
        const userData = { id : Date.now()}
        dataInputs.forEach( key => userData[key] = addForm[key].value )
        const allData = readFromStorage()
        allData.push(userData)
        writeToStorage(allData)
        window.location.href = "index.html"
    })
}

if(dataWrap){
    let allData = readFromStorage()
    drawElements(allData)
}

if(singleWrap){
    // const params = new URLSearchParams(window.location.search)
    // console.log(params.get("id"));
    // for( [ key, val ] of params){
    //     console.log(key, " - " , val);
    // }
    // if(params.has("id")) console.log("fgf")
    // const obj = Object.fromEntries(params)
    // console.log(obj)
    // {
    //     key:"val",
    // }
}