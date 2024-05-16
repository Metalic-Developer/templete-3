/* Start Header */

let other = document.querySelector(".other"),
  megaMenu = document.querySelector(".mega-menu");

document.onclick = (e) => {
  if (e.target === other.firstElementChild) {
    megaMenu.style.display = "flex";
    setTimeout(() => {
      megaMenu.style.opacity = "1";
      megaMenu.style.top = "100%";
    }, 500);
    megaMenu.onmouseover = () => {
      megaMenu.style.top = "calc(100% + 50px)";
    };
  } else {
    megaMenu.style.opacity = "0";
    setTimeout(() => {
      megaMenu.style.display = "none";
    }, 500);
  }
};

/* End Header */

/* Start Landing */

function down() {
  window.scrollBy(0, window.innerHeight);
}

/* End Landing */

// Our Skills

let progress = {
  adobe: 95,
  "html & css": 93,
  javaScript: 85,
  php: 87,
};

let h4s = [...document.querySelectorAll(".our-skills .content .box h4")],
  spans = [...document.querySelectorAll(".our-skills .content .box span")];

h4s.forEach((h4, index) => {
  h4.innerText = Object.keys(progress)[index];
});

spans.forEach((span, index) => {
  span.style.width = `${Object.values(progress)[index]}%`;
  span.setAttribute("data-progress", `${Object.values(progress)[index]}%`);
});
