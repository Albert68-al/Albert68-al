// Mobile Menu Toggle
const mobileMenuIcon = document.querySelector('.mobile-menu-icon');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuIcon) {
    mobileMenuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

// Close menu when clicking on a link
const navItems = document.querySelectorAll('.nav-links a');
navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 100,
                behavior: 'smooth'
            });
        }
    });
});

// Form validation
const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const messageError = document.getElementById('messageError');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        let isValid = true;
        
        // Reset errors
        nameError.textContent = '';
        emailError.textContent = '';
        messageError.textContent = '';
        
        // Validation du formulaire
        if (!nameInput.value.trim()) {
            nameError.textContent = 'Le nom est requis';
            isValid = false;
        }
        
        if (!emailInput.value.trim()) {
            emailError.textContent = 'L\'email est requis';
            isValid = false;
        } else if (!isValidEmail(emailInput.value)) {
            emailError.textContent = 'Format d\'email invalide';
            isValid = false;
        }
        
        if (!messageInput.value.trim()) {
            messageError.textContent = 'Le message est requis';
            isValid = false;
        }
        
        // Si le formulaire est valide, l'envoyer à Formspree
        if (isValid) {
            const formData = new FormData(contactForm);
            
            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    contactForm.reset();
                    alert('Merci pour votre message ! Je vous répondrai bientôt.');
                } else {
                    alert('Une erreur est survenue. Veuillez réessayer plus tard.');
                }
            })
            .catch(error => {
                console.error('Erreur:', error);
                alert('Une erreur est survenue. Veuillez réessayer plus tard.');
            });
        }
    });
}

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animation on scroll
const sections = document.querySelectorAll('.section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.8) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }
    });
}

// Initial style for sections
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
});

// Check on load and scroll
window.addEventListener('load', checkScroll);
window.addEventListener('scroll', checkScroll);

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem('theme') || 'dark';
body.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
    const currentTheme = body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    body.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'light') {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
}

// Language Toggle
const languageToggle = document.getElementById('languageToggle');
const html = document.documentElement;

// Load saved language
const savedLanguage = localStorage.getItem('language') || 'fr';
html.setAttribute('data-lang', savedLanguage);
body.setAttribute('data-lang', savedLanguage);
updateLanguageButton(savedLanguage);

languageToggle.addEventListener('click', () => {
    const currentLang = html.getAttribute('data-lang');
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    
    html.setAttribute('data-lang', newLang);
    body.setAttribute('data-lang', newLang);
    localStorage.setItem('language', newLang);
    updateLanguageButton(newLang);
});

function updateLanguageButton(lang) {
    languageToggle.textContent = lang === 'fr' ? 'EN' : 'FR';
    
    // Update form placeholders
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    if (lang === 'en') {
        nameInput.placeholder = nameInput.getAttribute('data-en-placeholder');
        emailInput.placeholder = emailInput.getAttribute('data-en-placeholder');
        messageInput.placeholder = messageInput.getAttribute('data-en-placeholder');
    } else {
        nameInput.placeholder = 'Votre Nom';
        emailInput.placeholder = 'Votre Email';
        messageInput.placeholder = 'Votre Message';
    }
}
