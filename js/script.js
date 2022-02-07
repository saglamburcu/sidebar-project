let sideBar = document.querySelector(".side-bar")
let menuBar = document.querySelector("#menu")

menuBar.addEventListener("click", function() {
    sideBar.classList.toggle("sideBar-show")
})

let closeButton = document.querySelector(".close")

closeButton.addEventListener("click", function() {
    sideBar.classList.remove("sideBar-show")
})

let menuItems = document.querySelector(".menu-items")
let list = document.querySelectorAll(".list")

// for(let i=0; i<list.length; i++) {
//   list[i].addEventListener("click", function() {
//     this.classList.add("bg-blue")
//   })
// }

list.forEach(element => {
  element.addEventListener("mouseover", function() {
    this.classList.remove("bg-white")
    this.classList.add("bg-blue") 
  })

  element.addEventListener("mouseout", function() {
    this.classList.remove("bg-blue")
    this.classList.add("bg-white") 
  })
})

