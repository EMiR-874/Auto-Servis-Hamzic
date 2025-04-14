//LOADING ANIMATION-----------------------------------------------------------
let videoEnded = false;
let pageLoaded = false;

function fadeOutLoader() {
  const loader = document.getElementById("loader");
  document.body.classList.remove("no-scroll");

  loader.classList.add("fade-out");

  setTimeout(() => {
    loader.style.display = "none";
  }, 500);
}

function checkReady() {
  if (videoEnded && pageLoaded) {
    fadeOutLoader();
  }
}

window.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("no-scroll");

  const video = document.getElementById("loader-video");
  const videoSource = document.getElementById("video-source");

  video.load();

  video.oncanplay = () => {
    video.play().catch((err) => {
      console.warn("Autoplay blocked:", err);
    });
  };

  video.onended = () => {
    videoEnded = true;
    checkReady();
  };
});

window.addEventListener("load", () => {
  pageLoaded = true;
  checkReady();
});
//END OF JS SECTION CODE------------------------------------------------------

//NAV DROPDOWN----------------------------------------------------------------
const showNavIcon = document.getElementById("showNav");
const closeNavIcon = document.getElementById("closeNav");
const dropdown = document.querySelector(".dropdown_hyperlinks");
const nav = document.querySelector("nav");

showNavIcon.addEventListener("click", () => {
  dropdown.classList.add("dropdown_hyperlinks_shown");
  showNavIcon.style.display = "none";
  closeNavIcon.style.display = "inline";
  nav.style.borderBottomLeftRadius = "0";
  nav.style.borderBottomRightRadius = "0";
});

closeNavIcon.addEventListener("click", () => {
  dropdown.classList.remove("dropdown_hyperlinks_shown");
  showNavIcon.style.display = "inline";
  closeNavIcon.style.display = "none";
  nav.style.borderBottomLeftRadius = "35px";
  nav.style.borderBottomRightRadius = "35px";
});
//END OF JS SECTION CODE------------------------------------------------------

//MAIN IMAGE SCROLL-----------------------------------------------------------
const animatedImg = document.getElementById("animated-img");

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;
  const moveDistance = scrollPosition * 1;
  animatedImg.style.transform = `translateX(-50%) translateX(${moveDistance}px)`;
});

function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
//END OF JS SECTION CODE------------------------------------------------------

// ARTICLE IMAGES-------------------------------------------------------------
const sectionObserver = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const images = entry.target.querySelectorAll("p");

        images.forEach((img, index) => {
          setTimeout(() => {
            img.classList.add("reveal");
          }, index * 150);
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const wrapper = document.querySelector(".wrapper");
if (wrapper) {
  sectionObserver.observe(wrapper);
}

const wrapperItems = document.querySelectorAll(".wrapper p");

wrapperItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.stopPropagation();
    wrapperItems.forEach((el) => el.classList.remove("active"));
    item.classList.add("active");
  });
});

document.addEventListener("click", (e) => {
  const isInsideWrapper = e.target.closest(".wrapper p");
  if (!isInsideWrapper) {
    wrapperItems.forEach((el) => el.classList.remove("active"));
  }
});
//END OF JS SECTION CODE------------------------------------------------------

//CARD VISIBLE ANIMATION------------------------------------------------------
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const cards = entry.target.querySelectorAll(".card");

        cards.forEach((card, index) => {
          setTimeout(() => {
            card.classList.add("reveal");
          }, index * 200);
        });

        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.3 }
);

const cardWrapper = document.querySelector(".card_wrapper");
if (cardWrapper) {
  observer.observe(cardWrapper);
}
//END OF JS SECTION CODE------------------------------------------------------

// CONTACT INPUT FILLED LABEL-------------------------------------------------
document.addEventListener("DOMContentLoaded", function () {
  const inputs = document.querySelectorAll(".input_type");

  inputs.forEach((input) => {
    input.addEventListener("input", function () {
      if (this.value.trim() !== "") {
        this.classList.add("filled");
      } else {
        this.classList.remove("filled");
      }
    });
  });
});
//END OF JS SECTION CODE------------------------------------------------------

// FOOTER YEAR----------------------------------------------------------------
document.getElementById("year").textContent = new Date().getFullYear();
//END OF JS SECTION CODE------------------------------------------------------
