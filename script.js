// =========================
// Loading Screen
// =========================

window.addEventListener("load", () => {

    setTimeout(() => {

        document.getElementById("loading").style.display = "none";

    }, 2000);

});

// =========================
// Typing Effect
// =========================

const text = "Good Night Liaa Sayangg🤍";

let i = 0;

function typing(){

    if(i < text.length){

        document.getElementById("typing").innerHTML += text.charAt(i);

        i++;

        setTimeout(typing,100);

    }

}

setTimeout(typing,2200);

// =========================
// Popup
// =========================

const popup = document.getElementById("popup");

document.getElementById("openBtn").onclick = () => {

    popup.style.display = "flex";

}

document.getElementById("closeBtn").onclick = () => {

    popup.style.display = "none";

}

// =========================
// Create Stars
// =========================

const stars = document.querySelector(".stars");

for(let i=0;i<120;i++){

    const star = document.createElement("span");

    const size = Math.random()*3+1;

    star.style.width = size+"px";

    star.style.height = size+"px";

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.animationDelay = Math.random()*5+"s";

    stars.appendChild(star);

}

// =========================
// Floating Stars Animation
// =========================

const style = document.createElement("style");

style.innerHTML=`

.stars span{

position:absolute;

background:white;

border-radius:50%;

box-shadow:0 0 10px white;

animation:blink 3s infinite;

}

@keyframes blink{

0%{

opacity:.2;

transform:scale(.5);

}

50%{

opacity:1;

transform:scale(1.3);

}

100%{

opacity:.3;

transform:scale(.8);

}

}

`;

document.head.appendChild(style);

// =========================
// Button Glow
// =========================

setInterval(()=>{

const btn=document.getElementById("openBtn");

btn.style.transform="scale(1.05)";

setTimeout(()=>{

btn.style.transform="scale(1)";

},500);

},2500);

// =========================
// Popup Close Outside
// =========================

window.onclick=function(e){

if(e.target==popup){

popup.style.display="none";

}

}

// =========================
// Moon Glow Animation
// =========================

setInterval(()=>{

const moon=document.querySelector(".moon");

moon.style.filter="brightness(1.2)";

setTimeout(()=>{

moon.style.filter="brightness(1)";

},1200);

},2500);
