    // Scroll reveal
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          observer.unobserve(e.target);
        }
      });
    }, { threshold: 0.1 });
    reveals.forEach(r => observer.observe(r));

    // Stagger project cards
    document.querySelectorAll('.project-card').forEach((card, i) => {
      card.style.transitionDelay = `${i * 0.1}s`;
    });

    // Form submit
    function handleSubmit(btn) {
      btn.textContent = '✓ Sent! I\'ll be in touch.';
      btn.style.background = '#2a9d8f';
      btn.disabled = true;
    }

    // Typing effect on hero eyebrow
    const eyebrow = document.querySelector(
