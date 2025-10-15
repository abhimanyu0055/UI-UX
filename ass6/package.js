
const packages = [
  { id: 1, destination: "Paris", durationDays: 5, basePrice: 1200, season: "peak" },
  { id: 2, destination: "Dubai", durationDays: 7, basePrice: 1500, season: "off" },
  { id: 3, destination: "Maldives", durationDays: 6, basePrice: 2000, season: "peak" }
];


function calculateFinalPrice(pkg) {
  let price = pkg.basePrice;
  
  
  if (pkg.season === "peak") price *= 1.2;
  else if (pkg.season === "off") price *= 0.9;

  
  const weekendSurcharge = pkg.durationDays > 6 ? 1.05 : 1.0;
  price *= weekendSurcharge;

  return price.toFixed(2);
}


function renderPackageTable() {
  const table = document.querySelector("table");
  
  
  const headerRow = table.rows[0];
  const newHeader = document.createElement("th");
  newHeader.textContent = "Final Price";
  headerRow.appendChild(newHeader);

  
  packages.forEach(pkg => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${pkg.destination}</td>
      <td>${pkg.durationDays} Days</td>
      <td>$${pkg.basePrice}</td>
      <td>${pkg.season}</td>
      <td>$${calculateFinalPrice(pkg)}</td>
    `;
    table.appendChild(row);
  });
}

document.addEventListener("DOMContentLoaded", renderPackageTable);
