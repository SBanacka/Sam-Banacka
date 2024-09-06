const navLinks = document.querySelectorAll(".Nav a");
const sections = document.querySelectorAll(".Body");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default link behavior

    // Get the target ID from the link's href attribute
    const targetId = link.getAttribute("href").substring(1);
    // Show all sections initially.
    sections.forEach((section) => section.classList.remove("hidden"));
    //Adjust font color to display current page.
    navLinks.forEach((eachLink) => eachLink.classList.remove("visible"));
    link.classList.add("visible");
    // Hide all other sections except the target
    sections.forEach((section) => {
      if (section.id !== targetId) {
        section.classList.add("hidden");
      }
    });
  });
});
