const accordionCards = document.querySelectorAll(".accordion-card");

accordionCards.forEach((card) => {
  const button = card.querySelector(".accordion-toggle");

  button.addEventListener("click", () => {
    const isActive = card.classList.contains("active");

    accordionCards.forEach((entry) => {
      entry.classList.remove("active");
      entry.querySelector(".accordion-toggle").setAttribute("aria-expanded", "false");
    });

    if (!isActive) {
      card.classList.add("active");
      button.setAttribute("aria-expanded", "true");
    }
  });
});
