// const up = document.querySelector("#up")
// const myDiv = document.querySelector("#myDiv")
// window.addEventListener('scroll', function(){
//     // console.log(window.scrollX, window.scrollY)
//     if(this.window.scrollY>=100){
//         up.classList.remove("d-none")
//     }
//     else{
//         up.classList.add("d-none")
//     }
// })

// up.addEventListener("click", function(){
//     // window.scrollTo(0, 500)
//     myDiv.scrollIntoView(
//         {
//             behavior: "smooth" // "instant"
//         }
//     )
// })

// const size = document.querySelector("#size")
// size.addEventListener("click", function(){
//     myDiv.innerHTML += `<p>${window.innerHeight} - ${window.innerWidth}</p>`
//     myDiv.innerHTML += `<p>${location.href} - ${location.origin}</p>`  
// })

const container = document.querySelector("#zoomBox")
const img = document.querySelector("#zoomImg")

let startX, startY, currentX=0, currentY=0
container.addEventListener("mouseenter", (e)=>{
    img.style.transform = "scale(2)"
})
container.addEventListener("mouseover", (e)=>{
    startX = e.clientX - currentX
    startY = e.clientY - currentY
    console.log(startX)
})
container.addEventListener("mouseleave", (e)=>{
    img.style.transform = "scale(1)"
    currentX=currentY=0
})
container.addEventListener("mousemove", (e)=>{
    currentX = e.clientX - startX
    currentY = e.clientY - startY
    console.log(currentX);
    img.style.transform = `scale(2) translate(${currentX/2}px, ${currentY/2}px)`
    console.log(img.style.transform)
})