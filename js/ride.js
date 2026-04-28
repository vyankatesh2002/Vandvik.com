   // Nav scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', window.scrollY > 60));

        // Mobile menu
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const overlay = document.getElementById('overlay');
        function toggleMenu(open) {
            mobileMenu.classList.toggle('open', open);
            overlay.classList.toggle('open', open);
            document.body.style.overflow = open ? 'hidden' : '';
        }
        hamburger.addEventListener('click', () => toggleMenu(true));
        overlay.addEventListener('click', () => toggleMenu(false));
        mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => toggleMenu(false)));

        // Reveal animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Smooth scroll for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(a => {
            a.addEventListener('click', e => {
                e.preventDefault();
                const target = document.querySelector(a.getAttribute('href'));
                if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            });
        });

        // FAQ toggle
        function toggleFaq(el) {
            const item = el.parentElement;
            item.classList.toggle('open');
        }

        // WhatsApp inquiry from form
        function openWhatsAppInquiry() {
            const form = document.getElementById('contactForm');
            const name = form.querySelector('[name="name"]').value.trim();
            const email = form.querySelector('[name="email"]').value.trim();
            const company = form.querySelector('[name="company"]').value.trim();
            const service = form.querySelector('[name="service"]').value;
            const message = form.querySelector('[name="message"]').value.trim();
            const serviceText = service ? service.replace(/-/g, ' ') : 'a project';
            let text = `Hi Vandvik, I'm interested in ${serviceText}.`;
            if (name) text += ` My name is ${name}.`;
            if (company) text += ` Company: ${company}.`;
            if (email) text += ` Email: ${email}.`;
            if (message) text += ` ${message}`;
            const encodedText = encodeURIComponent(text);
            window.open(`https://wa.me/919960340222?text=${encodedText}`, '_blank');
        }