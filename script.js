const hearts=document.querySelector(".hearts");

setInterval(()=>{

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML=["❤️","💖","💕","🌸","✨"][Math.floor(Math.random()*5)];

heart.style.left=Math.random()*100+"vw";

heart.style.bottom="-30px";

heart.style.fontSize=(20+Math.random()*25)+"px";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

},400);

document.getElementById("next").onclick=function(){

alert("Welcome ❤️");

} 
const pages = [
{
title:"🌸 Hey...",
text:"I wasn't planning to make this..."
},

{
title:"✨ But then...",
text:"I realized... some people deserve random little surprises."
},

{
title:"💖 And honestly...",
text:"The first person who came to my mind was you."
},

{
title:"😊 So...",
text:"Welcome to this tiny world I made just for you."
}
];

let current = 0;

const card = document.querySelector(".card");

document.getElementById("next").onclick = () =>{
showPage(current);
}

function showPage(i){

card.style.opacity="0";
card.style.transform="translateY(30px)";

setTimeout(()=>{

card.innerHTML=`

<div class="progress">${i+1} / ${pages.length}</div>

<h1 id="title"></h1>

<p id="text"></p>

<div class="continue">
Click anywhere ❤️
</div>

`;

typeWriter("title",pages[i].title,40,()=>{

typeWriter("text",pages[i].text,25);

});

card.style.opacity="1";
card.style.transform="translateY(0)";

document.body.onclick=next;

},400);

}

function next(){

current++;

if(current>=pages.length){

document.body.onclick=null;
card.innerHTML=`

<h1 class="bigTitle">💌 Just One More Thing, BBG...</h1>

<div class="loveLetter">

<p>
🌸 Babie... I don't even know when it happened, but talking to you somehow became one of my favorite parts of the day. 💖
</p>

<p>
✨ Whether we're being absolute idiots, teasing each other, roasting each other for no reason, or randomly talking about life till late at night... it just feels easy with you.
</p>

<p>
🤍 You have this weird talent of making even the most random conversations feel fun. Sometimes I open my phone hoping there's a message from you... and if there is, my mood instantly gets better. 🥹💕
</p>

<p>
🌷 You're genuinely someone I enjoy spending time with, even if it's through a screen. Distance kinda sucks... but somehow it doesn't stop us from making memories. 🌍💫
</p>

<p>
🩷 So here's a tiny reminder for you, baby...
Keep being your chaotic, adorable, troublemaker self because that's exactly the version of you I love talking to. 🫶✨
</p>

<p class="end">
❤️ From your favorite trouble inspector. 😌🌹
</p>

</div>

<button id="continueBtn">
Next Surprise 💖 →
</button>

`;

document.getElementById("continueBtn").onclick = () =>{

card.classList.add("zoomOut");

setTimeout(()=>{
nextChapter();
},700);

};


return;
}

showPage(current);

}

function typeWriter(id,text,speed,callback){

const el=document.getElementById(id);

let i=0;

const timer=setInterval(()=>{

el.innerHTML+=text.charAt(i);

i++;

if(i>=text.length){

clearInterval(timer);

if(callback) callback();

}

},speed);

}
function nextChapter(){

card.classList.remove("zoomOut");

card.innerHTML = `
<div class="letter-page">

    <h1>💌 My Dearest Love</h1>

    <div class="letter-text">

        <p>My Love,</p>

        <p>
            If you're reading this, it means you've reached another little
            surprise I made just for you.
        </p>

        <p>
            I may not always find the perfect words, but I hope you always know
            how much you mean to me. Every smile of yours makes my day brighter,
            and every memory we create becomes one I never want to lose.
        </p>

        <p>
            Thank you for being patient with me, believing in me, and making my
            life happier simply by being in it.
        </p>

        <p>
            I hope this tiny surprise reminds you that no matter how busy life
            gets, you'll always be someone incredibly special to me.
        </p>
         <p>Ily🌹</p>
        <p>
            Keep smiling, keep shining, and never forget how loved you are. ❤️
        </p>

        <p style="text-align:right;margin-top:30px;">
            Forever Yours ❤️
        </p>

    </div>

    <button class="continue-btn" onclick="showFinalSurprise()">
        Thank you for being you! 💖😘💋
    </button>

</div>
`;

}
