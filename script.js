const bars = document.querySelector(".bars");
const nav = document.querySelector("nav");

bars.onclick = () => {
  nav.classList.toggle("active");
}  

let items = document.querySelectorAll(".cw-accordion .cw-accordion__item .cw-label");
items.forEach(function (t) {
t.addEventListener("click", function (e) {
 items.forEach(function (e) {
 e !== t || e.classList.contains("cw-open")
 	? e.classList.remove("cw-open")
 	: e.classList.add("cw-open");
 });
});
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag("js", new Date());
gtag("config", "G-1JHMFQXCEW");


// Ecom
const imgs = document.querySelectorAll('.img-select a');
const imgBtns = [...imgs];
let imgId = 1;

imgBtns.forEach((imgItem) => {
    imgItem.addEventListener('click', (event) => {
        event.preventDefault();
        imgId = imgItem.dataset.id;
        slideImage();
    });
});

function slideImage(){
    const displayWidth = document.querySelector('.img-showcase img:first-child').clientWidth;

    document.querySelector('.img-showcase').style.transform = `translateX(${- (imgId - 1) * displayWidth}px)`;
}

window.addEventListener('resize', slideImage);