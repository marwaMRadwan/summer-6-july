const addForm = document.querySelector("#addForm")
const dataWrap = document.querySelector("#dataWrap")
const editData = document.querySelector("#editData")
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
    if(!dataWrap) return window.location.href="index.html"
    dataWrap.innerHTML=""
    allData.forEach((user, i)=>{
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
        const editAgeBtn = createMyOwnEle(ele, "button", "edit age",null, "btn btn-info")
        editAgeBtn.addEventListener("click", function(){
            // allData[i].age = +allData[i].age + 10
            // user.age = Number(user.age) + 10
            user.age = parseInt(user.age) + 10
            writeToStorage(allData)
            drawElements(allData)
        })
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
    const params = new URLSearchParams(window.location.search)
    let userId = params.get("id")
    const userData = readFromStorage()
    const singleData = userData.find(user=> userId == user.id)
    let div = createMyOwnEle(singleWrap, "div", null, null, "col-12")
    createMyOwnEle(div, "h3", `Data for user : ${singleData.name} , id : ${singleData.id}`, null, "text-primary")
    div = createMyOwnEle(singleWrap,"div", null, null, "col-md-5 my-3 p-3")
    createMyOwnEle(div,"div", `id : ${singleData.id? singleData.id : ' - '}`, null, " display-5 border-start border-danger border-5 bg-light p-3")

    div = createMyOwnEle(singleWrap,"div", null, null, "col-md-7 my-3 p-3")
    createMyOwnEle(div,"div", `name : ${singleData.name? singleData.name : " - "}`, null, " display-5 border-start border-danger border-5 bg-light p-3")
    div = createMyOwnEle(singleWrap,"div", null, null, "col-md-5 my-3 p-3")
    createMyOwnEle(div,"div", `age : ${singleData.age? singleData.age : " - "}`, null, " display-5 border-start border-danger border-5 bg-light p-3")
    div = createMyOwnEle(singleWrap,"div", null, null, "col-md-7 my-3 p-3")
    createMyOwnEle(div,"div", `email : ${singleData.email?singleData.email: " - "}`, null, " display-5 border-start border-danger border-5 bg-light p-3")
    div = createMyOwnEle(singleWrap,"div", null, null, "row justify-content-end")
    createMyOwnEle(div,"a", `Back to home`, "index.html", "btn btn-primary ms-3 col-md-2")
    createMyOwnEle(div,"a", `Edit`, `edit.html?id=${singleData.id}`, "btn btn-warning ms-3 col-md-2")
    const delBtn = createMyOwnEle(div,"button", `Delete`, null, "btn btn-danger ms-3 col-md-2")
    delBtn.addEventListener("click", ()=> { deleteItem(singleData.id, userData) })

}
if(editData){
    const params = new URLSearchParams(window.location.search)
    let userId = params.get("id")
    const userData = readFromStorage()
    const singleData = userData.findIndex(user=> userId == user.id)
    editData.name.value = userData[singleData].name
    editData.age.value = userData[singleData].age
    editData.email.value = userData[singleData].email
    editData.addEventListener("submit", function(e){
        e.preventDefault()
        userData[singleData] = {
            id: userId,
            name: editData.name.value,
            age: editData.age.value,
            email: editData.email.value
        }
        writeToStorage(userData)
        window.location.href="index.html"
    })
}