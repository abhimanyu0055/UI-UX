

document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const dateInput = document.getElementById("dates");
  const packageSelect = document.getElementById("package");
  const destinationSelect = document.getElementById("destination");

  
  const totalDisplay = document.createElement("p");
  totalDisplay.id = "totalDisplay";
  form.appendChild(totalDisplay);

  
  const packageRates = {
    Standard: 1000,
    Luxury: 2000,
    Honeymoon: 2500
  };

  function calculateTotal() {
    const selectedPackage = packageSelect.value;
    const base = packageRates[selectedPackage] || 0;

    const dateValue = dateInput.value;
    const nights = dateValue ? 5 : 0; 
    
    
    const guests = 2; 
    let total = base * (nights / 5);
    if (guests > 2) total *= 1.2;

    
    const promoCode = "EARLYBIRD"; 
    switch (promoCode) {
      case "EARLYBIRD":
        total *= 0.9;
        break;
    }

    totalDisplay.textContent = total
      ? `Estimated Total: $${total.toFixed(2)}`
      : "";
  }

  form.addEventListener("change", calculateTotal);

  form.addEventListener("submit", e => {
    e.preventDefault();
    if (!form.checkValidity()) {
      alert("Please fill out all required fields!");
      return;
    }
    alert("Booking successful!");
  });
});
