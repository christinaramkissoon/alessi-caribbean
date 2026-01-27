// Placeholder for future interactivity
console.log("Alessi Caribbean site loaded!");

// Example: Smooth scroll for nav links (future expansion)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});
