const navLinks = document.querySelectorAll(".Nav a");
const sections = document.querySelectorAll(
  "#Portfolio, #Skills, #About, #Contact"
);

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    const targetId = link.getAttribute("href").substring(1);
    // Get the target ID
    sections.forEach((section) => {
      if (section.id === targetId) {
        section.style.display = "block"; // or 'flex', etc.
      } else {
        section.style.display = "none";
      }
    });
  });
});
