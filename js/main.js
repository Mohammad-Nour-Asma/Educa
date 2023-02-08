let menu = document.querySelector(".navbar-nav ul");
let acc = document.querySelector("#account-btn");
let form = document.querySelector(".acc-form");
let loginb = document.querySelector(".MybtnL");
let regb = document.querySelector(".MybtnR");
let loginf = document.querySelector(".login");
let regf = document.querySelector(".register");
let loadMore = document.querySelector(".show-more");
let hidden = document.querySelectorAll(".courses .container .box2.hide");
if (loadMore != null) {
  loadMore.onclick = function () {
    loadMore.style.display = "none";
    hidden.forEach((e) => {
      e.classList.remove("hide");
    });
  };
}
loginb.onclick = function () {
  loginb.classList.add("active");
  regb.classList.remove("active");
  loginf.classList.remove("hide");
  regf.classList.add("hide");
};
regb.onclick = function () {
  loginb.classList.remove("active");
  regb.classList.add("active");
  loginf.classList.add("hide");
  regf.classList.remove("hide");
};
acc.addEventListener("click", (e) => {
  form.classList.toggle("active");
});
menuBtn.onclick = function () {
  menu.classList.toggle("active");
};

closeNavbar.onclick = function () {
  menu.classList.toggle("active");
};
closeForm.onclick = function () {
  form.classList.toggle("active");
};
window.onresize = function () {
  if (window.innerWidth > 767) {
    menu.classList.remove("active");
  }
};

var swiper = new Swiper(".home", {
  pagination: {
    el: ".swiper-pagination",
  },
  loop: true,
  grabCursor: true,
});

var swiper = new Swiper(".myswiper", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  grabCursor: true,
});
var swiper = new Swiper(".teach", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  grabCursor: true,
});
var swiper = new Swiper(".opinion", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
  },
  loop: true,
  grabCursor: true,
});
var swiper = new Swiper(".logo", {
  slidesPerView: 1,
  spaceBetween: 10,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
    450: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 4,
      spaceBetween: 20,
    },
    1200: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
  },
  loop: true,
  grabCursor: true,
});
