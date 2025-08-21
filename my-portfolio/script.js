// =========================
// HERO TEXT ANIMATION
// =========================
const words = ["UI Designer", "Videographer", "Photographer", "Web Developer"];
let i = 0;
const span = document.querySelector(".animated-words");

function changeWord() {
  span.textContent = words[i];
  span.classList.remove("fade");
  void span.offsetWidth; // restart animation
  span.classList.add("fade");
  i = (i + 1) % words.length;
}
setInterval(changeWord, 2000);
changeWord();

// =========================
// WORKS FILTER
// =========================
const filterButtons = document.querySelectorAll(".filter button");
const items = document.querySelectorAll(".gallery .item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter button.active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-filter");
    items.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

// =========================
// MODAL POPUP FOR PROJECTS
// =========================
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalDesc = document.getElementById("modal-desc");
const modalMedia = document.getElementById("modal-media");
const closeBtn = document.querySelector(".close");

items.forEach(item => {
  item.addEventListener("click", () => {
    modal.style.display = "flex";
    modalTitle.textContent = item.getAttribute("data-title");
    modalDesc.textContent = item.getAttribute("data-desc");

    // Clear old content
    modalMedia.innerHTML = "";

    if (item.getAttribute("data-img")) {
      // Show image
      const img = document.createElement("img");
      img.src = item.getAttribute("data-img");
      img.alt = item.getAttribute("data-title");
      modalMedia.appendChild(img);
    } else if (item.getAttribute("data-video")) {
      // Show video
      const video = document.createElement("video");
      video.src = item.getAttribute("data-video");
      video.controls = true;
      video.autoplay = true;
      modalMedia.appendChild(video);
    }
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  modalMedia.innerHTML = ""; // Stop video if any
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
    modalMedia.innerHTML = ""; // Stop video if any
  }
});

// =========================
// SMOOTH SCROLLING
// =========================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

// =========================
// HAMBURGER MENU TOGGLE
// =========================
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});

// Auto-close menu when clicking a link (mobile UX)
document.querySelectorAll("#nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show");
  });
});
