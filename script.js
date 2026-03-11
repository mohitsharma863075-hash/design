const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{
cards.forEach(card=>{
let top = card.getBoundingClientRect().top;

if(top < window.innerHeight - 100){
card.style.opacity = "1";
card.style.transform = "translateY(0)";
}

});
});
const toggle = document.getElementById("themeToggle");

toggle.addEventListener("click",()=>{
document.body.classList.toggle("light-mode");
});
const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll",()=>{
if(window.scrollY > 300){
topBtn.style.display="block";
}else{
topBtn.style.display="none";
}
});

topBtn.onclick = ()=>{
window.scrollTo({
top:0,
behavior:"smooth"
});
}
