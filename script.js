const loader = document.getElementById("loader");
const btn_div = document.getElementById("button-div");
const namee = document.getElementById("namee");
const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
const btn3 = document.getElementById("btn3");
const btn4 = document.getElementById("btn4");
const text = document.getElementById("input-text");
const prasad = document.getElementById("prasad");
const blessing = document.getElementById("blessing");
const bye = document.getElementById("bye");
const change = document.getElementById("change");
const changee = document.getElementById("changee");
const changeee = document.getElementById("changeee");

setTimeout(()=>{
    btn_div.style.display = "flex";
},2000);

btn1.addEventListener("click",()=>{
    loader.style.display="none";
    namee.style.display="block";
    
   
})

btn2.addEventListener("click",()=>{
    namee.style.display="none";
    prasad.style.display="block";
    change.innerHTML = text.value.trim();

})
btn3.addEventListener("click",()=>{
    prasad.style.display="none";
    blessing.style.display="block";
    changee.innerHTML = text.value.trim();
})
btn4.addEventListener("click",()=>{
    blessing.style.display="none";
    bye.style.display="block";
    changeee.innerHTML = text.value.trim();
})