// Add any new pages here in the future—every page will automatically show the link!
const NAV_ITEMS = [
  { label: "Overview", href: "index.html" },
  { label: "Code & Case Studies", href: "projects.html" }
  // Example for future pages:
  // { label: "Research Notes", href: "research.html" },
  // { label: "Code Snippets", href: "snippets.html" }
];

document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  // Inject Header
  const header = document.getElementById("site-header");
  if (header) {
    const linksHtml = NAV_ITEMS.map(item => {
      const isActive = currentPage === item.href ? "active" : "";
      return `<li><a href="${item.href}" class="${isActive}">${item.label}</a></li>`;
    }).join("");

    header.innerHTML = `
      <div class="nav-container">
        <a href="index.html" class="brand">Sneha V V</a>
        <ul class="nav-links">${linksHtml}</ul>
      </div>
    `;
  }

  // Inject Footer
  const footer = document.getElementById("site-footer");
  if (footer) {
    footer.innerHTML = `
      <p>
        Sneha V V &bull; Malappuram, Kerala &bull;
        <a href="mailto:sneha.vmenon25@gmail.com">sneha.vmenon25@gmail.com</a> &bull;
        <a href="https://github.com/snehavmenon25-ux" target="_blank" rel="noopener">GitHub</a> &bull;
        <a href="https://linkedin.com/in/sneha-v-v" target="_blank" rel="noopener">LinkedIn</a>
      </p>
    `;
  }
});
