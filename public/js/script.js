// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();

document.addEventListener("DOMContentLoaded", function () {
  const params = new URLSearchParams(window.location.search);
  const selectedCategory = params.get("category");

  const filters = document.querySelectorAll(".filter");

  filters.forEach((filter) => {
    const category = filter.getAttribute("data-category");

    if (category === selectedCategory) {
      filter.style.opacity = "1";
      filter.style.borderBottom = "2px solid black";
    }

    filter.addEventListener("click", () => {
      // ✅ Redirect to the correct route
      window.location.href = `/listings?category=${encodeURIComponent(
        category
      )}`;
    });
  });
});
//Refresh to come back on original listings page with no category selection
document.addEventListener("DOMContentLoaded", function () {
  const url = new URL(window.location.href);
  const isRefresh =
    window.performance &&
    window.performance.getEntriesByType("navigation")[0]?.type === "reload";

  if (
    url.pathname === "/listings" &&
    url.searchParams.has("category") &&
    isRefresh
  ) {
    window.location.replace("/listings");
  }
});

// Tax Toggle Switch
function handleTaxToggle() {
  const priceElements = document.getElementsByClassName("base-price");
  const taxInfoElements = document.getElementsByClassName("tax-info");

  for (let i = 0; i < priceElements.length; i++) {
    const priceEl = priceElements[i];
    const basePrice = parseFloat(priceEl.dataset.basePrice);
    const taxInfo = taxInfoElements[i];

    if (taxInfo.style.display !== "inline") {
      const finalPrice = basePrice * 1.18;
      priceEl.textContent = `₹${finalPrice.toLocaleString("en-IN", {
        maximumFractionDigits: 0,
      })}`;
      taxInfo.style.display = "inline";
    } else {
      priceEl.textContent = `₹${basePrice.toLocaleString("en-IN")}`;
      taxInfo.style.display = "none";
    }
  }
}

// Attach event listener to both desktop and mobile switches
const desktopToggle = document.getElementById("switchCheckDefault");
const mobileToggle = document.querySelector(".tax-toggle-sm");

if (desktopToggle) {
  desktopToggle.addEventListener("click", handleTaxToggle);
}

if (mobileToggle) {
  mobileToggle.addEventListener("click", handleTaxToggle);
}


// Redirect on dropdown change
const dropdown = document.getElementById("categoryDropdown");
if (dropdown) {
  dropdown.addEventListener("change", () => {
    const selectedCategory = dropdown.value;
    window.location.href = `/listings?category=${encodeURIComponent(selectedCategory)}`;
  });
}


  // Tax toggle logic for small screen switch
  const taxSwitchSm = document.getElementById("switchCheckDefaultSm");
  taxSwitchSm?.addEventListener("click", () => {
    const taxInfos = document.getElementsByClassName("tax-info");
    for (let info of taxInfos) {
      info.style.display = info.style.display !== "inline" ? "inline" : "none";
    }
  });
  //Refresh to come back on original listings page after search operation
  document.addEventListener("DOMContentLoaded", function () {
  const url = new URL(window.location.href);
  const navEntry = window.performance?.getEntriesByType("navigation")[0];
  const isRefresh = navEntry ? navEntry.type === "reload" : false;

  // If user is on /listings and there's a search query (?q=...) and it's a refresh
  if (url.pathname === "/listings" && url.searchParams.has("search") && isRefresh) {
    window.location.replace("/listings"); // Remove search filter
  }
});
