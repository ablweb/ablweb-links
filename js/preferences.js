// Function to set a cookie with a name, value, and expiration in days
function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days * 24 * 60 * 60 * 1000)); // Set the expiration date
  const expires = "expires=" + d.toUTCString();
  document.cookie = name + "=" + value + ";" + expires + ";path=/"; // Store the cookie
}

// Function to get a cookie by name
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim spaces
    if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length); // Return cookie value
  }
  return null; // Return null if cookie is not found
}

// Function to save the state of the checkboxes into cookies
function saveCheckboxState() {
  const fontState = document.getElementById("font-state").checked ? "checked" : "unchecked";
  const themeState = document.getElementById("theme-state").checked ? "checked" : "unchecked";
  const styleState = document.getElementById("style-state").checked ? "checked" : "unchecked";
  
  setCookie("font-state", fontState, 7);  // Store cookie for 7 days
  setCookie("theme-state", themeState, 7);
  setCookie("style-state", styleState, 7);
}

// Function to apply the saved state of the checkboxes
function applySavedState() {
  const fontState = getCookie("font-state");
  const themeState = getCookie("theme-state");
  const styleState = getCookie("style-state");

  // Apply the saved state if the value in the cookie is 'checked'
  if (fontState === "checked") {
    document.getElementById("font-state").checked = true;
  }
  if (themeState === "checked") {
    document.getElementById("theme-state").checked = true;
  }
  if (styleState === "checked") {
    document.getElementById("style-state").checked = true;
  }
}

// Add event listeners to save the state whenever a checkbox is changed
document.querySelectorAll('.state-linker').forEach(item => {
  item.addEventListener('change', saveCheckboxState);
});

// Apply saved states when the page loads
document.addEventListener("DOMContentLoaded", applySavedState);
