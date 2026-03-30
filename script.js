// Modal handling
const modal = document.getElementById('applyModal');
const closeModalBtn = document.querySelector('.close-modal');
const applyButtons = document.querySelectorAll('.apply-btn');
const modalJobTitleSpan = document.getElementById('modalJobTitle');
const applyForm = document.getElementById('applyForm');

// open modal with job title
applyButtons.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const jobName = btn.getAttribute('data-job');
    modalJobTitleSpan.innerText = jobName;
    modal.style.display = 'flex';
  });
});

// close modal
closeModalBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
});

// submit application (simple feedback)
applyForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('applicantName').value.trim();
  const email = document.getElementById('applicantEmail').value.trim();
  if (name && email) {
    alert(`🎉 Thanks ${name}! Your application for "${modalJobTitleSpan.innerText}" has been submitted. We'll contact you at ${email}.`);
    applyForm.reset();
    modal.style.display = 'none';
  } else {
    alert('Please fill in both name and email.');
  }
});

// Add smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    if (targetId === '#') return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Intersection Observer for fade-up animations
const fadeElements = document.querySelectorAll('.fade-up, .job-card, .timeline-item');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});