let menu =document.querySelector(".header_menu");
let burger=document.querySelector(".header_burger");
let close=document.querySelector(".header_close");
let main=document.querySelector("main");
let submit=document.querySelector("#submit");
let checkbox=document.querySelector("#form_checkbox");
let proverka=document.querySelector(".proverka");
let required=document.querySelector(".form_required");


burger.addEventListener("click", function()
{
    menu.style.display="block";
    main.style.visibility="hidden";
    document.body.style.overflowY="hidden";
    document.querySelector(".header").style.height='300px';
});

close.addEventListener("click", function()
{
    menu.style.display="none";
    main.style.visibility="visible";
   document.body.style.overflowY="auto"; 
   document.querySelector(".header").style.height='auto';
});

submit.addEventListener("click",function()
{
    if(checkbox.checked) 
    proverka.value=" ";
    else  if(!checkbox.checked) 
    {
        
    proverka.value="";
    required.style.visibility="visible";
    setTimeout(req,800); 
    }
});

function req()
{
    required.style.visibility="hidden";
}