let body=document.body;
console.log(body)

let image=document.createElement("img");
image.setAttribute("src", "./lightbulb-OFF.png");
image.style.width="600px";
image.style.height="600px";
body.appendChild(image);
console.log(image);

let button=document.createElement("button");
button.innerHTML="ON";
body.appendChild(button);
console.log(button);

button.addEventListener("click",()=>{
   if(button.innerHTML=="ON"){
    image.setAttribute("src","./lightbulb-ON.png")
    image.style.height="630px";
    image.style.width="450px";

    button.innerHTML="OFF"
   }else{
    image.setAttribute("src","./lightbulb-OFF.png")
    image.style.width="600px";
    image.style.height="600px";
    button.innerHTML="ON";
   } ;
});