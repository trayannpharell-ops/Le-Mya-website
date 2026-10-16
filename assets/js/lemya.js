document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".lemya-delivery-form").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const french = document.documentElement.lang === "fr";
      const message = french ? [
        "Bonjour Le Mya, je souhaite passer une commande en livraison.",
        `Nom : ${data.get("name")}`,
        `Téléphone : ${data.get("phone")}`,
        `Commande : ${data.get("items")}`,
        `Adresse de livraison : ${data.get("address")}`,
        data.get("notes") ? `Instructions supplémentaires : ${data.get("notes")}` : "",
        "Merci de confirmer la disponibilité, le prix total et les modalités de livraison.",
      ].filter(Boolean).join("\n") : [
        "Hello Le Mya, I would like to request a delivery order.",
        `Name: ${data.get("name")}`,
        `Phone: ${data.get("phone")}`,
        `Order: ${data.get("items")}`,
        `Delivery address: ${data.get("address")}`,
        data.get("notes") ? `Extra instructions: ${data.get("notes")}` : "",
        "Please confirm availability, total price and delivery details.",
      ].filter(Boolean).join("\n");
      window.open(`https://wa.me/237698678157?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    });
  });
});
