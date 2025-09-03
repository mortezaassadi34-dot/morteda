    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const products = document.querySelectorAll(".main-content article");

    function searchProduct() {
      const q = searchInput.value.toLowerCase().trim();
      products.forEach(article => {
        const name = article.querySelector("h2").textContent.toLowerCase();
        article.style.display = name.includes(q) ? "block" : "none";
      });
    }

    searchBtn.addEventListener("click", searchProduct);
    searchInput.addEventListener("keydown", e => {
      if (e.key === "Enter") searchProduct();
    });

    function changeValue() {
      alert("محصول به سبد خرید اضافه شد!");
    }