// localStorage.setItem("x","test")
// console.log(localStorage.getItem("x"))
// let data = [
//     {a:1, b:2},
//     {a:2, b:3}
// ]
// localStorage.setItem("data", JSON.stringify(data))

// let res = JSON.parse(localStorage.getItem("data"))
// console.log(typeof res)
// console.log(res[1]);


let data = localStorage.getItem("data")
if(data == null) data = []
else if(Array.isArray(data)) data=JSON.parse(data)
console.log(  data)



const addForm = document.querySelector("#addForm")
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

// let d = readFromStorage("data")
// d.push({name:1})
// writeToStorage(d,"data")
// resetStorageData("data")

addForm.addEventListener("submit", function(e){
    e.preventDefault()
    const userData = { id : Date.now()}
    dataInputs.forEach(key=> userData[key] = addForm[key].value )
    //     name: addForm.name.value,
    //     age: addForm.age.value,
    //     email: addForm.email.value
    // }

    /*
        userData["name"] = addForm["name"].value
        userData.name = addForm.name.value
        userData = {
        name: addForm.name.value
        }
    */
    const allData = readFromStorage()
    allData.push(userData)
    writeToStorage(allData)
    window.location.href = "index.html"
})