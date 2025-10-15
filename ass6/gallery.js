

document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");
  
  
  const modal = document.createElement("div");
  modal.id = "imgModal";
  modal.style.display = "none";
  modal.style.position = "fixed";
  modal.style.top = "0";
  modal.style.left = "0";
  modal.style.width = "100%";
  modal.style.height = "100%";
  modal.style.background = "rgba(0,0,0,0.8)";
  modal.style.justifyContent = "center";
  modal.style.alignItems = "center";
  modal.style.zIndex = "1000";

  const modalImg = document.createElement("img");
  modalImg.style.maxWidth = "80%";
  modalImg.style.borderRadius = "8px";
  modal.appendChild(modalImg);

  document.body.appendChild(modal);

  
  galleryImages.forEach(img => {
    img.dataset.large = img.src; 
    img.addEventListener("click", () => {
      modalImg.src = img.dataset.large;
      modal.style.display = "flex";
    });
  });

  
  modal.addEventListener("click", () => (modal.style.display = "none"));
});
