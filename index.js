// ========================================
// scroll to top functionality
// ========================================

const footerElem = document.querySelector(".section-footer");

const scrollElement = document.createElement("div");
scrollElement.classList.add("scrollTop-style");

scrollElement.innerHTML = `<i class="fa-solid fa-circle-arrow-up scroll-top"></i>`

footerElem.after(scrollElement);

const topsection = document.querySelector(".header");

const scrollTop = () => {
    topsection.scrollIntoView({ behavior: "smooth" });
};

if (scrollElement) {
    scrollElement.addEventListener("click", scrollTop);
}



// ========================================
// Responsive navigation
// ========================================
const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector("header");

const toggleNavbar = () => {
    // alert("hi");
    nav_header.classList.toggle("active");
};

if(mobile_nav){
    mobile_nav.addEventListener("click", () => toggleNavbar());
}


// ========================================
// sticky navigation
// ========================================
// const sectionHero = document.querySelector(".section-hero");

// const observer = new IntersectionObserver(
//     (entries) => {
//         const ent = entries[0];
//         console.log(ent);
//         !ent.isIntersecting ?
//             document.body.classList.add("sticky") :
//             document.body.classList.remove("sticky");
//     }, {
//     // viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-100px",
// }
// );
// // when the hero section end part reached then we need to show the sticky navigation
// observer.observe(sectionHero);


// // ========================================
// //  Creating a portfolio tabbed component
// // ========================================

// const p_btns = document.querySelector(".p-btns");
// const p_btn = document.querySelectorAll(".p-btn");
// const p_img_elem = document.querySelectorAll(".img-overlay");
// const counterNum = document.querySelectorAll(".counter-numbers");

// // animate numbers
// const speed = 5;

// counterNum.forEach((curElem) => {
//     const updateNumber = () => {
//         const targetNumber = parseInt(curElem.dataset.number);
//         const initialNum = parseInt(curElem.innerText);
//         // console.log(targetNumber);
//         // console.log(initialNum);

//         const increamentNumber = Math.trunc(targetNumber / speed);
//         // console.log(increamentNumber);
//         if (initialNum < targetNumber) {
//             curElem.innerText = initialNum + increamentNumber + "%";
//             // console.log(initialNum + increamentNumber);
//             setTimeout(updateNumber, 100);
//         }
//     };
//     updateNumber();
// });


// p_btns.addEventListener("click",(e)=>{
//     const p_btn_clicked = e.target;

//     console.log(p_btn_clicked);

//     p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

//     p_btn_clicked.classList.add("p-btn-active");

//     // to find the number in data attr.
//     const btn_num = p_btn_clicked.dataset.btnNum;
//     console.log(btn_num);

//     const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

//     p_img_elem.forEach((curImg) => curImg.classList.add("p-image-not-active"));

//     img_active.forEach((actImg) => actImg.classList.remove("p-image-not-active"));
// });


// corousel js code 
// $(Swiper(".mySwiper", {
//         spaceBetween: 50,
//         centeredSlides: true,
//         autoplay: {
//             delay: 2500,
//             disableOnInteraction: true,
//         },
//         pagination: {
//             el: ".swiper-pagination",
//             clickable: true,
//         },
//         navigation: {
//             nextEl: ".swiper-button-next",
//             prevEl: ".swiper-button-prev",
//         },
// }));
