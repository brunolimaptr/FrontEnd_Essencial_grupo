document.addEventListener("DOMContentLoaded", function () {
  const pratos = document.querySelectorAll(".prato");

  pratos.forEach((prato) => {
    const img = prato.querySelector("img");
    const detalhes = img.dataset.detalhes;

    prato.addEventListener("mouseover", function () {
      const detalhesElement = document.createElement("div");
      detalhesElement.classList.add("detalhes");
      detalhesElement.textContent = detalhes;
      prato.appendChild(detalhesElement);
    });

    prato.addEventListener("mouseout", function () {
      const detalhesElement = prato.querySelector(".detalhes");
      if (detalhesElement) {
        detalhesElement.remove();
      }
    });
  });
});
