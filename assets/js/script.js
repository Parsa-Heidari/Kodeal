////////  Header Start  //////// No.1

window.addEventListener('scroll', headerScroll)

function headerScroll() {
    var header = document.querySelector('header');
    if (window.scrollY > 80) {
        if (!document.body.classList.contains("dark-mode-theme")) {
            header.classList.add('scrolled');
        }
        else {
            header.classList.remove('scrolled');
        }
    } else {
        header.classList.remove('scrolled');
    }
}

////////  Header End  ////////


////////  Back to top button Start  //////// No.2
// Variables
let backBtn = document.querySelector(".back-to-top")

// Events

backBtn.addEventListener("click", backToTop)
window.addEventListener("scroll", displayFixed)

// Functions

function displayFixed() {
    let backBtn = document.querySelector(".back-to-top")
    if (window.scrollY > 90) {
        backBtn.classList.add('scrolled-btn');
    } else {
        backBtn.classList.remove('scrolled-btn');
    }
}

function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}
////////  Back to top button End  ////////


/////// SubMenu Start /////// No.3

let menu = document.querySelector(".sub-menu")
let closeBtn = document.querySelector(".close-btn")
let menuBtn = document.querySelector(".fa-bars")

menuBtn.addEventListener("click", () => {
    menu.classList.add("active-menu")
})

closeBtn.addEventListener("click", () => {
    menu.classList.remove("active-menu")
})

/////// SubMenu End ///////


/////// SearchBar Start /////// No.4

let rightSide = document.querySelector(".right-side")
let searchBtn = document.querySelector(".search")
let l = 0
searchBtn.addEventListener("click", () => {
    rightSide.classList.toggle("active-search")

    if (l == 0) {
        searchBtn.innerHTML = '<i class="fa-solid fa-xmark"></i>'
        l++
    }
    else if (l == 1) {
        searchBtn.innerHTML = '<i class="fa-solid fa-magnifying-glass"></i>'
        l = 0
    }
})

/////// searchBar End ///////


///////  Slider Start  /////// No.5

// Variables
let slider = document.querySelector(".slider")//Slider Continaer
let slide = document.querySelectorAll(".slide")// Slider Slides
let li = document.querySelectorAll(".dot")//Slider Navigation Options

let i = 0

// Events

setInterval(scrollContianer, 5000);// Activates scrollContainer() every 5 seconds 

// Functions

function scrollContianer() {
    removeLiActive()
    let screenSize = window.innerWidth
    if (i < slide.length - 1) {
        slider.scrollLeft += screenSize;
        i++
    }
    else if (i = slide.length - 1) {
        slider.scrollLeft = 0;
        i = 0
    }

    li[i].classList.add("active-slider-li")//to track li color
}

// Slider Navigation
for (let n = 0; n < li.length; n++) {
    li[n].addEventListener("click", () => {
        removeLiActive()
        let screenSize = window.innerWidth
        slider.scrollLeft = screenSize * n
        i = n //to change scrollContainer()'s cycle

        li[n].classList.add("active-slider-li")
    })
}

function removeLiActive() {
    for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active-slider-li")
    }
}


////////  Slider End  ////////




////////  Finance Part Start //////// No.6

let item = document.querySelectorAll(".finance-item")
let navItem = document.querySelectorAll(".nav-item")

for (let i = 0; i < item.length; i++) {
    navItem[i].addEventListener("click", () => {
        removeActiveClass()
        navItem[i].classList.add("active")
        item[i].classList.add("active")
    })
}

function removeActiveClass() {
    for (let i = 0; i < item.length; i++) {
        navItem[i].classList.remove("active")
        item[i].classList.remove("active")
    }
}
//////// Finance Part End ////////




//////// Q&A Start //////// No.7

let box = document.querySelectorAll(".faq")//FAQ container
let qBtn = document.querySelectorAll(".question-button")//shrink button

for (let i = 0; i < box.length; i++) {
    box[i].addEventListener("click", () => {
        if (box[i].classList.contains("active")) {
            removeQActive()
            resetBtnTextcontent()
            // qBtn[i].innerHTML = "+"
        }
        else {
            removeQActive()
            resetBtnTextcontent()
            box[i].classList.add("active")
            qBtn[i].innerHTML = "-"
        }
    })
}

function removeQActive() {
    for (let i = 0; i < box.length; i++) {
        box[i].classList.remove("active")
    }
}

function resetBtnTextcontent() {
    for (let i = 0; i < box.length; i++) {
        qBtn[i].innerHTML = "+"
    }
}
//////// Q&A End ////////




//////// Dark Mode Start //////// No.8

let darkModeBtn = document.querySelector(".dark-mode")

darkModeBtn.addEventListener("click", () => {
    document.querySelector(".body").classList.toggle("dark-mode-theme")
    darkModeBtn.classList.toggle("active")
    headerScroll()
})

//////// Dark Mode Start ////////



//////// Video Start //////// No.9

const playBtn = document.querySelector(".play-button")
const videoPlayer = document.querySelector(".video-player")
const VideoCloseBtn = document.querySelector(".video-close-button")

playBtn.addEventListener("click", () => {
    videoPlayer.classList.add("active-video")
})

VideoCloseBtn.addEventListener("click", () => {
    videoPlayer.classList.remove("active-video")
})

//////// Video End ////////



//////// Loading Page Start //////// No.10

window.addEventListener("load", () => {
    let loader = document.querySelector(".loader")
    loader.classList.add("hidden")
})

//////// Loading Page End ////////