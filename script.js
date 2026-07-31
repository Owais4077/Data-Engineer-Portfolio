document.addEventListener("DOMContentLoaded", () => {
    createParticles();
    setupNavigation();
    setupScrollReveal();
    setupProjectFiltering();
    setupContactFormFeedback();
    updateFooterYear();
});

function createParticles() {
    const particlesContainer = document.getElementById("particles");
    if (!particlesContainer) return;

    const particleCount = window.matchMedia("(max-width: 760px)").matches ? 14 : 28;

    for (let i = 0; i < particleCount; i += 1) {
        const particle = document.createElement("span");
        particle.className = "particle";
        const size = Math.random() * 9 + 3;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 8}s`;
        particle.style.animationDuration = `${Math.random() * 10 + 14}s`;
        particlesContainer.appendChild(particle);
    }
}

function setupNavigation() {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    const navbar = document.querySelector(".navbar");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            const isOpen = navMenu.classList.toggle("active");
            hamburger.classList.toggle("active", isOpen);
            hamburger.setAttribute("aria-expanded", String(isOpen));
        });

        navMenu.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                navMenu.classList.remove("active");
                hamburger.classList.remove("active");
                hamburger.setAttribute("aria-expanded", "false");
            });
        });
    }

    window.addEventListener("scroll", () => {
        if (!navbar) return;
        navbar.classList.toggle("scrolled", window.scrollY > 24);
    }, { passive: true });
}

function setupScrollReveal() {
    const elements = document.querySelectorAll(
        ".about-text, .about-card, .skill-category, .experience-card, .project-card, .certificate-card, .resume-preview, .resume-actions, .github-card, .github-stat, .contact-item, .contact-form"
    );

    if (!("IntersectionObserver" in window)) {
        elements.forEach((element) => element.classList.add("animated"));
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animated");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    elements.forEach((element) => {
        element.classList.add("animate-on-scroll");
        observer.observe(element);
    });
}

function setupProjectFiltering() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");
    const searchInput = document.getElementById("projectSearch");
    const projectCount = document.getElementById("projectCount");

    function applyFilters() {
        const activeFilter = document.querySelector(".filter-btn.active")?.dataset.filter || "all";
        const searchTerm = (searchInput?.value || "").trim().toLowerCase();
        let visibleCount = 0;

        projectCards.forEach((card) => {
            const searchableText = card.textContent.toLowerCase();
            const matchesFilter = activeFilter === "all" || card.dataset.category === activeFilter;
            const matchesSearch = !searchTerm || searchableText.includes(searchTerm);
            const isVisible = matchesFilter && matchesSearch;

            card.classList.toggle("hidden", !isVisible);
            if (isVisible) visibleCount += 1;
        });

        if (projectCount) {
            projectCount.textContent = String(visibleCount);
        }
    }

    filterButtons.forEach((button) => {
        button.addEventListener("click", () => {
            filterButtons.forEach((item) => item.classList.remove("active"));
            button.classList.add("active");
            applyFilters();
        });
    });

    searchInput?.addEventListener("input", applyFilters);
    applyFilters();
}

function setupContactFormFeedback() {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", () => {
        const button = form.querySelector("button[type='submit']");
        if (!button) return;

        button.dataset.originalText = button.textContent;
        button.textContent = "Opening email...";

        window.setTimeout(() => {
            button.textContent = button.dataset.originalText || "Send Message";
        }, 2200);
    });
}

function updateFooterYear() {
    const footer = document.querySelector(".footer p");
    if (!footer) return;

    footer.innerHTML = `&copy; ${new Date().getFullYear()} Owais Ahmad. Junior Data Engineer.`;
}
