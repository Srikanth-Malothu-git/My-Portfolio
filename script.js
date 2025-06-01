// Smooth Scrolling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Dynamic Greeting
const greeting = document.getElementById('greeting');
const hour = new Date().getHours();
if (hour < 12) {
    greeting.textContent = 'Good Morning! I’m a Frontend/Full Stack Developer';
} else if (hour < 18) {
    greeting.textContent = 'Good Afternoon! I’m a Frontend/Full Stack Developer';
} else {
    greeting.textContent = 'Good Evening! I’m a Frontend/Full Stack Developer';
}

// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
});

if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark-mode');
}

// Project Filtering
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        projects.forEach(project => {
            if (filter === 'all' || project.getAttribute('data-category') === filter) {
                project.classList.remove('hidden');
            } else {
                project.classList.add('hidden');
            }
        });
    });
});

// Fade-in Animation on Scroll
const sections = document.querySelectorAll('.fade-in');
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = '0.2s';
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => observer.observe(section));

// Set "All" as default filter
document.querySelector('[data-filter="all"]').classList.add('active');