// Active nav link highlighting based on scroll position
(function () {
  const navLinks = document.querySelectorAll(".sticky-nav a");
  const sections = [];

  // Collect all target sections
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (href && href.startsWith("#")) {
      const section = document.querySelector(href);
      if (section) {
        sections.push({ id: href, section, link });
      }
    }
  });

  function updateActiveLink() {
    const scrollY = window.scrollY + 80; // offset for sticky nav height

    let currentId = sections[0]?.id;

    for (const { id, section } of sections) {
      if (scrollY >= section.offsetTop) {
        currentId = id;
      }
    }

    navLinks.forEach((link) => {
      link.classList.toggle("active", link.getAttribute("href") === currentId);
    });
  }

  // Throttled scroll listener for performance
  let ticking = false;
  window.addEventListener("scroll", () => {
    if (!ticking) {
      window.requestAnimationFrame(() => {
        updateActiveLink();
        ticking = false;
      });
      ticking = true;
    }
  });

  updateActiveLink();
})();

// Smooth scroll for nav links (fallback for browsers that don't support scroll-behavior)
(function () {
  document.querySelectorAll('.sticky-nav a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
})();

// Copy button for code blocks
(function () {
  document.querySelectorAll(".code-block pre code").forEach((codeBlock) => {
    const pre = codeBlock.parentElement;
    const block = pre.parentElement;

    // Create copy button
    const copyBtn = document.createElement("button");
    copyBtn.className = "copy-btn";
    copyBtn.textContent = "📋 Copy";
    copyBtn.setAttribute("aria-label", "Copy code to clipboard");
    copyBtn.style.cssText = `
      position: absolute;
      top: 8px;
      right: 8px;
      background: #22262e;
      border: 1px solid #30363d;
      border-radius: 6px;
      padding: 4px 10px;
      font-size: 0.75rem;
      color: #8b949e;
      cursor: pointer;
      transition: all 0.2s;
      font-family: inherit;
    `;

    // Make the pre container relative for positioning
    if (getComputedStyle(pre).position === "static") {
      pre.style.position = "relative";
    }

    pre.appendChild(copyBtn);

    copyBtn.addEventListener("click", async () => {
      try {
        await navigator.clipboard.writeText(codeBlock.textContent);
        copyBtn.textContent = "✅ Copied!";
        copyBtn.style.color = "#3fb950";
        copyBtn.style.borderColor = "#3fb950";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copy";
          copyBtn.style.color = "#8b949e";
          copyBtn.style.borderColor = "#30363d";
        }, 2000);
      } catch {
        copyBtn.textContent = "❌ Failed";
        setTimeout(() => {
          copyBtn.textContent = "📋 Copy";
        }, 2000);
      }
    });
  });
})();
