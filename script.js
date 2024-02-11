let menu=document.querySelector("#menubar");
let navbar=document.querySelector(".navbar");
let header=document.querySelector(".header2")

menu.addEventListener("click",()=>{
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle("active");
})

window.onscroll=()=>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove("active");

    if(window.scrollY > 150){
        header.classList.add("active");
    }
    else{
        header.classList.remove("active");
    }
}