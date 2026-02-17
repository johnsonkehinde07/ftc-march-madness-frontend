// js/main.js - FTC MARCH MADNESS
document.addEventListener('DOMContentLoaded', function() {
  
  // ----- TICKET FORM (buy.html) -----
  const ticketForm = document.getElementById("ticketForm");
  if (ticketForm) {
    ticketForm.addEventListener("submit", function(e) {
      e.preventDefault();

      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();

      if (!name || !email) {
        alert("⚠️ FULL NAME AND EMAIL REQUIRED");
        return;
      }

      const btn = ticketForm.querySelector('.btn');
      const originalHTML = btn.innerHTML;
      btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> PROCESSING...';
      btn.disabled = true;

      // Simulate payment (80% success rate for demo)
      const success = Math.random() > 0.2;

      setTimeout(() => {
        if (success) {
          window.location.href = "success.html";
        } else {
          window.location.href = "fail.html";
        }
      }, 2000);
    });
  }

  // ----- HERO PARTICLES (index.html) -----
  const hero = document.querySelector('.hero');
  if (hero) {
    for (let i = 0; i < 20; i++) {
      createParticle(hero);
    }
  }

  // ----- PARTICLE FUNCTION -----
  function createParticle(container) {
    const p = document.createElement('div');
    p.style.position = 'absolute';
    p.style.width = (Math.random() * 8 + 3) + 'px';
    p.style.height = p.style.width;
    p.style.background = `rgba(198, 156, 109, ${Math.random() * 0.4})`;
    p.style.borderRadius = '0px';
    p.style.transform = 'rotate(45deg)';
    p.style.left = Math.random() * 100 + '%';
    p.style.top = Math.random() * 100 + '%';
    p.style.pointerEvents = 'none';
    p.style.opacity = 0.6;
    p.style.boxShadow = '0 0 8px #C69C6D';
    p.style.zIndex = '5';
    container.style.overflow = 'hidden';
    container.appendChild(p);

    let x = Math.random() * 100;
    let y = Math.random() * 100;
    let dx = (Math.random() - 0.5) * 1.4;
    let dy = (Math.random() - 0.5) * 1.4;

    function move() {
      x += dx;
      y += dy;
      if (x > 100 || x < 0) dx *= -1;
      if (y > 100 || y < 0) dy *= -1;
      p.style.left = x + '%';
      p.style.top = y + '%';
      requestAnimationFrame(move);
    }
    move();
  }

  // ----- CONSOLE BRANDING -----
  console.log(`
  ╔════════════════════════════╗
  ║    FTC · MARCH MADNESS     ║
  ║     FIRST BATCH · ₦8,000   ║
  ║        LIMITED TO 30       ║
  ╚════════════════════════════╝
  `);
});