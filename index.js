const main = document.querySelector("main-1");


const menu = document.querySelector("#menu");
const cross = document.querySelector(".fa-xmark");
const blurs = document.querySelector(".blur");
const side = document.querySelector(".hdn-side");


menu.addEventListener("click" , ()=>{

      blurs.classList.add("active");
     side.classList.add("active");
})



cross.addEventListener("click",()=>{

     blurs.classList.remove("active");
     side.classList.remove("active");

})


const h1 =document.querySelector(".head-1");
const h2 =document.querySelector(".head-5");
const h3 =document.querySelector(".head-6");
const h4 =document.querySelector(".head-7");
const h5 =document.querySelector(".head-8");
const h6 =document.querySelector(".head-9");
const h7 =document.querySelector(".head-10");

const l1 =document.querySelector(".login-1");
const l2 =document.querySelector(".login-5");
const l3 =document.querySelector(".login-6");
const l4 =document.querySelector(".login-7");
const l5 =document.querySelector(".login-8");
const l6 =document.querySelector(".login-9");
const l7 =document.querySelector(".login-10");


main.addEventListener("scroll",() => {

    console.log(main.scrollTop);
    const unit =main.scrollTop;


  

})

