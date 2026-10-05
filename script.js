/* =========================================================
   HEADER SCROLL EFFECT
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

  if (window.scrollY > 30) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }

});


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const nav = document.getElementById("nav");

menuBtn.addEventListener("click", () => {

  menuBtn.classList.toggle("active");
  nav.classList.toggle("open");

});


/* Close mobile menu after clicking a link */

document.querySelectorAll(".nav-link").forEach((link) => {

  link.addEventListener("click", () => {

    menuBtn.classList.remove("active");
    nav.classList.remove("open");

  });

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let currentSection = "";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 180;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }

  });


  navLinks.forEach((link) => {

    link.classList.remove("active");

    if (
      link.getAttribute("href") === "#" + currentSection
    ) {
      link.classList.add("active");
    }

  });

});


/* =========================================================
   THEME TOGGLE
========================================================= */

const themeBtn = document.getElementById("themeBtn");
const themeIcon = document.querySelector(".theme-icon");

if (themeBtn) {

  themeBtn.addEventListener("click", () => {

    document.body.classList.toggle("light-mode");

    const isLight =
      document.body.classList.contains("light-mode");

    if (themeIcon) {
      themeIcon.textContent = isLight ? "☾" : "☼";
    }

    localStorage.setItem(
      "portfolioTheme",
      isLight ? "light" : "dark"
    );

  });

}


/* Load saved theme */

const savedTheme =
  localStorage.getItem("portfolioTheme");

if (savedTheme === "light") {

  document.body.classList.add("light-mode");

  if (themeIcon) {
    themeIcon.textContent = "☾";
  }

} else {

  if (themeIcon) {
    themeIcon.textContent = "☼";
  }

}


/* =========================================================
   PROJECT MODAL
========================================================= */

const modal = document.getElementById("projectModal");
const modalOverlay = document.getElementById("modalOverlay");
const modalClose = document.getElementById("modalClose");

const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const modalTech = document.getElementById("modalTech");
const modalType = document.getElementById("modalType");


const projectData = {

  filter: {

    title: "Product Filter & Sort",

    description:
      "A responsive e-commerce product discovery experience with filter controls, sorting, applied filter states and mobile-friendly interactions. The goal is to make product discovery faster and easier while maintaining the existing storefront functionality.",

    tech: "JavaScript / Shopify / CSS",

    type: "E-commerce UI"

  },


  cart: {

    title: "Smart Cart Drawer",

    description:
      "A dynamic cart drawer experience with quantity updates, product removal, subtotal calculations and responsive mobile behaviour. The interface is designed to keep customers inside the shopping experience while managing their cart.",

    tech: "JavaScript / Shopify",

    type: "Cart Experience"

  },


  mobile: {

    title: "Mobile E-commerce UI",

    description:
      "A mobile-first shopping interface focused on clear navigation, product discovery and responsive layouts. The design adapts the desktop shopping experience into an easy-to-use mobile interface.",

    tech: "HTML / CSS / JavaScript",

    type: "Responsive UI"

  }

};


document.querySelectorAll(".project-link").forEach((button) => {

  button.addEventListener("click", () => {

    const project =
      projectData[button.dataset.project];

    if (!project) {
      return;
    }

    modalTitle.textContent =
      project.title;

    modalDescription.textContent =
      project.description;

    modalTech.textContent =
      project.tech;

    modalType.textContent =
      project.type;

    modal.classList.add("active");

    document.body.style.overflow = "hidden";

  });

});


function closeModal() {

  modal.classList.remove("active");

  document.body.style.overflow = "";

}


modalClose.addEventListener("click", closeModal);

modalOverlay.addEventListener("click", closeModal);


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeModal();
  }

});

/* =========================================================
   CONTACT FORM
========================================================= */

const contactForm =
  document.getElementById("contactForm");

const formMessage =
  document.getElementById("formMessage");


if (contactForm) {

  contactForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const submitButton =
      contactForm.querySelector(".submit-btn");
    if (!submitButton) {
      return;
    }
    const originalButtonText =
      submitButton.innerHTML;
    /* Get form values */

    const name =
      document.getElementById("name").value.trim();

    const email =
      document.getElementById("email").value.trim();

    const message =
      document.getElementById("message").value.trim();
    /* Validate */

    if (!name || !email || !message) {

      if (formMessage) {

        formMessage.style.display = "block";

        formMessage.textContent =
          "Please fill in all fields.";

        formMessage.style.color =
          "#ef4444";

      }

      return;

    }


    /* Show sending state */

    submitButton.disabled = true;

    submitButton.innerHTML =
      "Sending...";


    if (formMessage) {

      formMessage.style.display = "block";

      formMessage.textContent =
        "Sending your message...";

      formMessage.style.color = "";

    }


    try {

      const response = await fetch(
        "https://sreetharan-portfolio-backend.onrender.com/api/contact",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json"
          },

          body: JSON.stringify({
            name: name,
            email: email,
            message: message
          })
        }
      );


      const data =
        await response.json();


      if (!response.ok) {

        throw new Error(
          data.message ||
          "Unable to send the message."
        );

      }


      /* Success */

      if (formMessage) {

        formMessage.style.display = "block";

        formMessage.textContent =
          data.message ||
          "Thanks! Your message has been sent successfully.";

        formMessage.style.color =
          "#22c55e";

      }


      contactForm.reset();


    } catch (error) {

      console.error(
        "Contact form error:",
        error
      );


      if (formMessage) {

        formMessage.style.display = "block";

        formMessage.textContent =
          error.message ||
          "Something went wrong. Please try again.";

        formMessage.style.color =
          "#ef4444";

      }

    }


    /* Restore button */

    submitButton.disabled = false;

    submitButton.innerHTML =
      originalButtonText;

  });

}



/* =========================================================
   CURRENT YEAR
========================================================= */

const yearElement =
  document.getElementById("year");

if (yearElement) {

  yearElement.textContent =
    new Date().getFullYear();

}


/* =========================================================
   SIMPLE REVEAL ANIMATION
========================================================= */

const revealElements =
  document.querySelectorAll(
    ".about-card, .skill-card, .project-card, .service-row, .contact-form"
  );


revealElements.forEach((element) => {

  element.style.opacity = "0";

  element.style.transform =
    "translateY(20px)";

  element.style.transition =
    "opacity 0.6s ease, transform 0.6s ease";

});


function revealOnScroll() {

  revealElements.forEach((element) => {

    const rect =
      element.getBoundingClientRect();


    if (
      rect.top <
      window.innerHeight - 80
    ) {

      element.style.opacity = "1";

      element.style.transform =
        "translateY(0)";

    }

  });

}


window.addEventListener(
  "scroll",
  revealOnScroll
);

revealOnScroll();
