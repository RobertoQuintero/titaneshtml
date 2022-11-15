// let navtoggle   = document.getElementById('navtoggle'),
//      mainMenu     = document.getElementById('main-menu');

// navtoggle.addEventListener('click',()=>{
//     mainMenu.classList.toggle('show')
//     mainMenu.classList.contains('show')
//         ?	navtoggle.innerHTML = '<span>Ocultar</span>'
// 				:	navtoggle.innerHTML = '<i class="fa fa-bars"></i>'
// })

const naviToggle = document.getElementById("navi-toggle");
// const navLinks = [...document.querySelectorAll(".navigation__item")];
const navList = document.getElementById("navList");

navList.addEventListener("click", (e) => {
  console.log(e.target.classList.contains("navigation__link"));
  if (e.target.classList.contains("navigation__link")) {
    naviToggle.checked = false;
  }
});

console.log(navList);
