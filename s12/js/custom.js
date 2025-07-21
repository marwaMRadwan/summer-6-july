// for while do while for of for in foreach
// for(let i=1; i<=10; i++){
//     console.log("hello")
// }

// for(let val=1; val<=10; val+=2){
//     // if(val%2!=0) console.log(val)
//     if(val ==5) break
//     console.log(val)
// }
// let x =1
// for(;x==10;x++){
    // if(x==10) break
    // x++
//}

// let c = 1
// while(c<10){
//     c++
// }

// let x = prompt("test")
// alert(x)

// let choice 

// while(choice != "exit"){
//     choice = prompt("enter your choice")
// }

// do{
//     choice= prompt("enter your choice")
// } while(choice!="exit")

// sum of odd numbers from 1 to 50
// let sum = 0
// for( let i = 1; i<=50; i+=2 ) {
//     sum += i
// }

// count of digits of a number
// let num = prompt("enter a number"), count = 0
// while( num > 0 ){
//     num = parseInt(num / 10)
//     console.log(num)
//     count++
// }
// console.log(count)
// reverse number  //12345. => 54321
// let num = prompt("enter a number"), rev = 0
// while( num > 0 ){
//     let digit = num % 10.   // 5.    4.  3
//     num = parseInt(num / 10) //1234.  123
//     rev = rev*10 + digit  // 5 54. 5*10 + 4. 54. 54*10 + 3. 543
// }
// console.log(rev)


// let tableNum = prompt("enter a number")
// for(let i=1; i<=12; i++){
//     // console.log(tableNum + " X " + i + " = " +  i*tableNum )
//     console.log(` ${ tableNum } X ${ i } = ${ i * tableNum } `)
// }

// let arr = [ "a" , 4 , true , false , 7.8 , "marwa" ]

// let arr1 = new Array( 1, 2, 3, "ii", false)

// console.log(arr[2])
// console.log( arr.length )
// for(let i=0; i < arr.length; i++){
//     console.log(arr[i])
// }

// for(val in arr){
//     console.log( arr[val] )
// }

//forEach

// arr.forEach((element, ind, a) => {
//     console.log(` ${ind} - ${element} - ${a}`)
// });


// let a = ["a", "b", "c"]

// if(a) console.log(true)
// else console.log(false)
// console.log(Boolean(a))
// console.log( a.length )
// console.log( a.at(-2)) // a[2]
// console.log(a[-1]) // undefined

// a.push("y")
// console.log(a)
// a.unshift("y")
// console.log(a)
// a.pop()
// console.log(a)
// a.shift()
// console.log(a)
// console.log(a.length)
// a[99]=1
// console.log(a)


// let a = [0], b=[0]
// console.log(a == b) 

// let x = ["marwa", "radwan"]
// // console.log( x.toString())
// let fullName = x.join(" - ")
// console.log(fullName);

// let a = [1], b=[9]
// let c = a.concat(b)
// console.log(a, b, c)
let arr = [1,2,3,4,5,6,7, 4]
// arr.copyWithin(1,4)
// console.log(arr)
// const c = arr.splice(1,3)
// console.log(arr, c)

// console.log( arr.indexOf(4) )
// console.log( arr.lastIndexOf(4) )

// console.log(arr.includes(9))

// arr.sort()
// console.log(arr)
// arr.reverse()
// console.log(arr)


let a = [1,2,3,4,5,6,7,4,2,3]

// let sum =0 
// a.forEach(el=> {
//     // console.log(el)
//     sum += el
// })

// console.log(sum)

// let x  = a.filter(el=> {
//     return el>4
// })
// console.log(x)

// let x  = a.find(el=> {
//     return el>4
// })
// console.log(x)

// let x  = a.findIndex(el=> {
//     return el>4
// })
// console.log(x)

// arr = [ 1, 2, 3 ]
// obj = { }

// console.log(typeof arr, typeof obj)
// Array.isArray(obj)

// let obj = {
//     name: "marwa",
//     age: 40, 
//     email: "marwa@techsexperts.com",
//     gender: "female",
//     "job":"CEO"
// }

// console.log( obj["name"] );
// console.log( obj.name );

// let users = [
//     {name:"", age:1},
//     {name:"", age:1},
//     {name:"", age:1},
//     {name:"", age:1},
//     {name:"", age:1},
//     {name:"", age:1},
//     {name:"", age:1},
// ]

let data = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: false
    },
    {
        userId: 1,  
        id: 4,
        title: "et porro tempora",
        completed: true
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
    {
        userId: 1,
        id: 6,
        title: "qui ullam ratione quibusdam voluptatem quia omnis",
        completed: false
    },
    {
        userId: 1,
        id: 7,
        title: "illo expedita consequatur quia in",
        completed: false
    },
    {
        userId: 1,
        id: 8,
        title: "quo adipisci enim quam ut ab",
        completed: true
    },
    {
        userId: 1,
        id: 9,
        title: "molestiae perspiciatis ipsa",
        completed: false
    },
    {
        userId: 1,
        id: 10,
        title: "illo est ratione doloremque quia maiores aut",
        completed: true
    }
    ]