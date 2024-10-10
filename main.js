// Animation for header background color change using GSAP
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = "#051129";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Animation for typed text using Typed.js
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Content Creator",
    "Python Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Disable right click menu in the webpage
// document.addEventListener("contextmenu", (event) => event.preventDefault());

// Animation for header background color change using GSAP
document.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 50) {
    header.style.backgroundColor = "#051129";
  } else {
    header.style.backgroundColor = "transparent";
  }
});

// Animation for typed text using Typed.js
var typed = new Typed(".text", {
  strings: [
    "Frontend Developer",
    "Web Developer",
    "Content Creator",
    "Python Developer",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function () {
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.navbar');
  const navLinks = document.querySelectorAll('.navbar a'); // Select all anchor tags inside the navbar
  const closeBtn = document.querySelector('.close-btn'); // Close button in the navbar

  if (navToggle) {
    navToggle.addEventListener('click', function () {
      navMenu.classList.toggle('show');
    });
  }

  // Close the navbar when any link inside it is clicked
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      navMenu.classList.remove('show');
      navMenu.classList.remove('active'); // Also remove 'active' class
      closeBtn.style.opacity = '0'; // Ensure the close button is hidden when a link is clicked
    });
  });
});

// Toggle menu function for close button
function toggleMenu() {
  const navbar = document.querySelector('.navbar');
  const closeBtn = document.querySelector('.close-btn');

  navbar.classList.toggle('active'); // This toggles the navbar visibility

  // When menu is active, show the close button
  if (navbar.classList.contains('active')) {
    closeBtn.style.opacity = '1'; // Make the close button visible
  } else {
    closeBtn.style.opacity = '0'; // Hide the close button when menu is closed
  }
}