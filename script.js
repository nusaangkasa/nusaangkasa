 
    // Tooggle hamburger menu
    const toggle = document.getElementById('menu-toggle');
    const menu = document.getElementById('menu');

    toggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
 

    // toggle galery
    function toggleGallery() {
      const grid = document.getElementById("gallery-grid");
      const btn = document.querySelector(".toggle-gallery-btn");
      grid.classList.toggle("collapsed");
      btn.textContent = grid.classList.contains("collapsed") ? "Lihat Semua" : "Sembunyikan";
    }
  