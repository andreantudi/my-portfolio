window.addEventListener("DOMContentLoaded", function () {
  var recommendationForm = document.getElementById("recommendation-form");
  var recommendationsContainer = document.getElementById(
    "recommendations-container"
  );

  recommendationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var nameInput = document.getElementById("name");
    var recommendationInput = document.getElementById("recommendation");

    var name = nameInput.value;
    var recommendation = recommendationInput.value;

    if (name && recommendation) {
      var newRecommendation = document.createElement("div");
      newRecommendation.classList.add("recommendation");
      newRecommendation.innerHTML = "<p>" + recommendation + "</p>";

      recommendationsContainer.appendChild(newRecommendation);

      nameInput.value = "";
      recommendationInput.value = "";

      // Display a pop-up with the submitted values
      alert(
        "Thank you, " + name + "! Your recommendation has been submitted:\n\n"
      );
    }
  });
});

// Add interactivity with JavaScript

// Scroll animations
function handleScrollAnimations() {
  const fadeElements = document.querySelectorAll(".fade-in");
  const slideInElements = document.querySelectorAll(".slide-in-left");

  fadeElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("active");
    }
  });

  slideInElements.forEach((element) => {
    if (isElementInViewport(element)) {
      element.classList.add("active");
    }
  });
}

function isElementInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

window.addEventListener("scroll", handleScrollAnimations);

// Back to top
window.addEventListener("scroll", function () {
  var backToTop = document.querySelector(".back-to-top");
  if (window.pageYOffset > 300) {
    backToTop.style.opacity = "1";
    backToTop.style.visibility = "visible";
  } else {
    backToTop.style.opacity = "0";
    backToTop.style.visibility = "hidden";
  }
});

document.querySelector(".back-to-top").addEventListener("click", function (e) {
  e.preventDefault();
  window.scroll({
    top: 0,
    behavior: "smooth",
  });
});
