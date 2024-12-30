// Smooth Scrolling for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Highlight Active Section in Navbar (for smoother navigation experience)
  window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');
  
    let currentSection = '';
  
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      if (window.scrollY >= sectionTop - 10) {
        currentSection = section.getAttribute('id');
      }
    });
  
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(currentSection)) {
        link.classList.add('active');
    }
  });
});

// Form Submission Handler
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function (e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  // Simulating form submission
  if (name && email && message) {
    formMessage.textContent = 'Thank you for reaching out! I will get back to you soon.';
    formMessage.style.color = '#28a745';
    contactForm.reset(); // Reset the form fields
  } else {
    formMessage.textContent = 'Please fill out all fields before submitting.';
    formMessage.style.color = '#dc3545';
  }
});


// Dynamic Year in Footer (Optional)
const footer = document.querySelector('footer');
if (footer) {
  const yearSpan = document.createElement('span');
  yearSpan.textContent = ` ${new Date().getFullYear()}`;
  footer.innerHTML += yearSpan.outerHTML;
}

// Scroll-to-Top Button (Optional)
const scrollToTopButton = document.createElement('button');
scrollToTopButton.textContent = "↑";
scrollToTopButton.classList.add('scroll-to-top');
document.body.appendChild(scrollToTopButton);

scrollToTopButton.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

window.addEventListener('scroll', function () {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'block';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});
