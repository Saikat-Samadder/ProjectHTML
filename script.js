let buttonn = document.querySelector('.btn');
let crrmode = "dark";

buttonn.addEventListener("click", ()=>{

    if(crrmode === "dark"){
        document.querySelector("body").style.backgroundColor = "white"
        crrmode = "light"
    }else{
        document.querySelector("body").style.backgroundColor = "black"
        crrmode = "dark"
    }
    console.log(crrmode);
})