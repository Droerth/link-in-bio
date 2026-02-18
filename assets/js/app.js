// Año automático
document.getElementById("y").textContent = new Date().getFullYear();

// Tracking básico opcional (solo consola). Puedes borrarlo si no lo quieres.
document.querySelectorAll(".btn").forEach((a) => {
  a.addEventListener("click", () => {
    const p = a.getAttribute("data-platform") || "link";
    console.log("Click:", p, a.href);
  });
});
