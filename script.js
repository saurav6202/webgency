const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');

mobileMenuBtn.addEventListener('click', function () {
  mobileMenu.classList.toggle('active');
  this.innerHTML = mobileMenu.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});
document.querySelector(".body").addEventListener("click", () => {
  // mobileMenu.style.transform = "translateY(-150%)";
  mobileMenu.classList.remove('active');
  mobileMenuBtn.innerHTML = mobileMenu.classList.contains('active') ?
    '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';

})
// Close mobile menu when clicking a link
document.querySelectorAll('.mobile-menu-links a').forEach(link => {
  link.addEventListener('click', function () {
    mobileMenu.classList.remove('active');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
  });
});

const button = document.querySelector(".cta-button");

// On hover, animate up
button.addEventListener("mouseenter", () => {
  gsap.to(button, { y: -5, duration: 0.5, ease: "power2.out" });
});

// On mouse leave, animate back
button.addEventListener("mouseleave", () => {
  gsap.to(button, { y: 0, duration: 0.5, ease: "power2.out" });
});

// logo
const h1 = document.querySelector(".hero .hero-content .logo");
let spans = "";
if (h1) {

  const array = h1.textContent.split("");
  array.forEach((ele, idx) => {
    if (idx < (array.length / 2)) {
      spans += `<span class="a">${ele}</span>`;
    } else {
      spans += `<span class="b">${ele}</span>`;
    }
    if (idx >= 5) {
      spans += `<span class="b" style="color: var(--secondary);>${ele}</span>`;
    }
  });
  h1.innerHTML = spans;
}


