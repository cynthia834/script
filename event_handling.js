// Event Handling
document.getElementById("clickBtn").addEventListener("click", () => {
  alert("Button clicked!");
});

document.getElementById("hoverBox").addEventListener("mouseover", () => {
  document.getElementById("hoverBox").style.backgroundColor = "lightblue";
});

document.getElementById("hoverBox").addEventListener("mouseout", () => {
  document.getElementById("hoverBox").style.backgroundColor = "#eee";
});

document.getElementById("keyInput").addEventListener("keypress", (e) => {
  console.log("Key pressed:", e.key);
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  alert("Secret double-click action triggered!");
});

// Interactive Elements
document.getElementById("colorChanger").addEventListener("click", () => {
  const btn = document.getElementById("colorChanger");
  btn.style.backgroundColor = btn.style.backgroundColor === "orange" ? "green" : "orange";
});

let slideIndex = 0;
const slides = document.querySelectorAll("#slideshow img");

document.getElementById("nextSlide").addEventListener("click", () => {
  slides[slideIndex].classList.remove("active");
  slideIndex = (slideIndex + 1) % slides.length;
  slides[slideIndex].classList.add("active");
});

window.showTab = function(id) {
  document.querySelectorAll(".tabs div").forEach(tab => tab.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

// Form Validation
document.getElementById("myForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  let errors = [];

  if (!name) errors.push("Name is required.");
  if (!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) errors.push("Enter a valid email address.");
  if (password.length < 8) errors.push("Password must be at least 8 characters long.");

  const errorBox = document.getElementById("formErrors");
  if (errors.length > 0) {
    errorBox.innerHTML = errors.join("<br>");
    errorBox.style.color = "red";
  } else {
    errorBox.innerHTML = "Form submitted successfully!";
    errorBox.style.color = "green";
  }
});
