document.addEventListener("DOMContentLoaded", () => {
  const pages = {
    home: document.getElementById("home-page"),
    scripts: document.getElementById("scripts-page")
  };
  const nav = document.getElementById("primary-navigation");
  const menuButton = document.getElementById("mobile-menu-button");
  const navButtons = document.querySelectorAll("[data-page]");
  const pageLinks = document.querySelectorAll("[data-page-link]");

  function showPage(pageName) {
    if (!Object.prototype.hasOwnProperty.call(pages, pageName)) return;

    Object.entries(pages).forEach(([name, page]) => {
      const isActive = name === pageName;
      page.hidden = !isActive;
      page.classList.toggle("active", isActive);
    });

    document.querySelectorAll(".nav-link[data-page]").forEach((button) => {
      const isActive = button.dataset.page === pageName;
      button.classList.toggle("active", isActive);
      if (isActive) button.setAttribute("aria-current", "page");
      else button.removeAttribute("aria-current");
    });

    nav.classList.remove("open");
    menuButton.setAttribute("aria-expanded", "false");
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  navButtons.forEach((button) => {
    button.addEventListener("click", () => showPage(button.dataset.page));
  });

  pageLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      showPage(link.dataset.pageLink);
    });
  });

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
  });

  document.addEventListener("click", (event) => {
    if (!nav.contains(event.target) && !menuButton.contains(event.target)) {
      nav.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
    }
  });

  async function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) {
      await navigator.clipboard.writeText(text);
      return;
    }

    const temporary = document.createElement("textarea");
    temporary.value = text;
    temporary.setAttribute("readonly", "");
    temporary.style.position = "fixed";
    temporary.style.opacity = "0";
    document.body.appendChild(temporary);
    temporary.select();
    const copied = document.execCommand("copy");
    temporary.remove();
    if (!copied) throw new Error("Clipboard copy was not successful.");
  }

  document.querySelectorAll("[data-copy]").forEach((button) => {
    button.addEventListener("click", async () => {
      const card = button.closest(".script-card");
      const code = card.querySelector(".code-block code").textContent;
      const status = card.querySelector(".copy-status");

      try {
        await copyText(code);
        button.textContent = "Copied!";
        button.classList.add("copied");
        status.textContent = "Code copied to clipboard.";
      } catch {
        button.textContent = "Copy failed";
        button.classList.remove("copied");
        status.textContent = "Clipboard access failed. Select and copy the code manually.";
      }

      window.setTimeout(() => {
        button.textContent = "Copy Code";
        button.classList.remove("copied");
      }, 1800);
    });
  });

  document.getElementById("current-year").textContent = new Date().getFullYear();
});
